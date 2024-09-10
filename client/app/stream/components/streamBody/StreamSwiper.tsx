'use client'
import React, { useEffect, useState } from "react";
import { Navigation, A11y, Autoplay, Keyboard, Mousewheel} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import useStreamStore from "@/stores/store";
import MovieCard from "../MovieCard/MovieCard";
import { getContent } from "../../streamActions";
import { toast } from "react-toastify";

interface ContentItem {
  id: number;
  backdrop_path: string;
  title: string;
  name?: string;
}

export default function StreamSwiper({ category }: { category: string }) {

  const { contentType } = useStreamStore();
  const [content, setContent] = useState([]);



  const formattedCategoryName = category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

  useEffect(() => {
    (async () => {
      const res = await getContent({ contentType, category })
      // console.log(res);

      if (res?.error) {
        toast.error(res.message)
      } else if (res?.success) {
        // console.log(res?.content);
        setContent(res?.content)
      }

    })()
  }, [contentType, category])

  return (
    <div className="text-white px-10 pt-12 ">

      <h2 className='mb-4 text-2xl font-bold'>
        {formattedCategoryName} {formattedContentType}
      </h2>

      {
        content.length > 0 && (
          <Swiper
            className="stream_swiper"
            modules={[Navigation, A11y, Keyboard, Mousewheel]}
            spaceBetween={10}
            slidesPerView={4}
            keyboard={{ enabled: true }}
            mousewheel={true}
            navigation
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {
              content.map((item:any, index:number)  => {

                if(!item?.backdrop_path) return

                return (
                  <SwiperSlide key={index}>
                    <MovieCard item={item} />
                  </SwiperSlide>
                )
              }
              )

            }
          </Swiper> 
        )
      }

    </div>
  );
}