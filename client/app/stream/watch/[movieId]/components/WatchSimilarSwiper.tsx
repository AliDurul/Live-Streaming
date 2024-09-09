'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow,  Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import { SMALL_IMG_BASE_URL } from '@/utils/constants';
import Image from 'next/image';

export default function WatchSimilarSwiper({ content }: { content: any }) {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                mousewheel={true}

                modules={[EffectCoverflow, Mousewheel]}
                className="similar_swiper"
            >
                {
                    content.map((item: any) => {
                        if (item.poster_path === null) return null;

                        return (
                            <SwiperSlide key={item.id}>
                                <Link key={item.id} href={`/stream/watch/${item.id}`} className='w-52 flex-none'>
                                    <Image
                                        width={208}
                                        height={400}
                                        src={SMALL_IMG_BASE_URL + item.poster_path}
                                        alt='Poster path'
                                        className='w-full h-auto rounded-md'
                                    />
                                    {/* <h4 className='z-50 mt-2 text-lg font-semibold'>{item.title || item.name}</h4> */}
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
