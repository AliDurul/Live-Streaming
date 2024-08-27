import React from 'react'
import { BillBoardPlayBtn } from './BillBoardPlayBtn'
import { BillBoardMoreInfoBtn } from './BillBoardMoreInfoBtn'

const BillBoard = () => {
  return (
    <div className='relative h-[56.25vh]'>
      <video
        autoPlay
        muted
        loop
        poster='/images/poster.png'
        src='/images/howto.mp4'
        className='object-cover w-full h-full'
      >
      </video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className='text-white text-xl md:text-3xl h-full w-[50%] lg:text-4xl font-bold drop-shadow-xl'>
          How to Train Your Dragon
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] lg:w-[50%] drop-shadow-xl  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sunt consequuntur pariatur amet quam voluptatem alias quia aut explicabo dolores?
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3 ">
          <BillBoardPlayBtn />
          <BillBoardMoreInfoBtn />
       
        </div>
      </div>
    </div>
  )
}

export default BillBoard