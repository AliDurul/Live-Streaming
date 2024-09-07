'use client'
import React, { useState } from 'react'
import StreamVideo from './HeaderVideo'
import { HeaderPlayBtn } from './HeaderPlayBtn'
import { HeaderdInfoBtn } from './HeaderdInfoBtn'
import useTrendingContent from '@/hooks/useTrendingContent'
import Image from 'next/image'
import { ORIGINAL_IMG_BASE_URL } from '@/utils/constants'

const StreamHeader = () => {

  const { trendingContent }: { trendingContent: any } = useTrendingContent();
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className='relative h-[80vh] bg-black/45'>
      <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10' />

      {/* <StreamVideo /> */}

      {imgLoading && (
        <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
      )}

      <Image
        width={1295} // or 1281
        height={696} // or 720
        src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
        alt={trendingContent?.title || trendingContent?.name}
        className='absolute top-0 left-0 w-full h-full object-cover -z-50'
        onLoad={() => {
          setImgLoading(false);
        }}
        loading='lazy'
      />

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className='text-white text-xl md:text-3xl h-full w-[50%] lg:text-4xl font-bold drop-shadow-xl'>
          {trendingContent?.title || trendingContent?.name}
        </p>
        <p className='mt-2 text-lg'>
          {trendingContent?.release_date?.split("-")[0] ||
            trendingContent?.first_air_date.split("-")[0]}{" "}
          | {trendingContent?.adult ? "18+" : "PG-13"}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] lg:w-[50%] drop-shadow-xl  ">
          {trendingContent?.overview.length > 200
            ? trendingContent?.overview.slice(0, 200) + "..."
            : trendingContent?.overview}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3 ">
          <HeaderPlayBtn />
          <HeaderdInfoBtn />
        </div>
      </div>
    </div>
  )
}

export default StreamHeader