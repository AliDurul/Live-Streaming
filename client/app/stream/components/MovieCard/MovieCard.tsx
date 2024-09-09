
import Image from 'next/image'
import React from 'react'
import { ORIGINAL_IMG_BASE_URL } from '@/utils/constants'
import MovieCardBtns from './MovieCardBtns'

interface MovieCardProps {
    item: any
}

const MovieCard = ({ item }: MovieCardProps) => {

    return (
        <div className='group bg-zinc-900 col-span relative z-50'>
            <Image
                src={ORIGINAL_IMG_BASE_URL + item?.backdrop_path}
                // src='/images/thumbnail.jpg'
                height={100} width={200} alt='thumbnail' loading={'lazy'} className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full ' />

            <div className='
            opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-100
            md:group-hover:-translate-y-[5vw]
            group-hover:opacity-100'
            >
                <Image
                    src={ORIGINAL_IMG_BASE_URL + item?.backdrop_path}
                    height={100} width={200} alt='thumbnail' className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full' />
                <div className=' z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition  shadow-md rounded-b-md '>
                    <MovieCardBtns item={item} />
                    <p className='text-green-400 font-semibold mt-4'>
                        {item?.original_name}{" "}
                        <span className='text-white '>
                            {item?.release_date?.split("-")[0] ||
                                item?.first_air_date.split("-")[0]}{" "}
                            | {item?.adult ? "18+" : "PG-13"}
                        </span>
                    </p>
                    <div className="flex flex-wrap mt-4 gap-2 items-center justify-between">
                        <div className={`text-white text-[10px] lg:text-sm p-3 font-bold rounded-sm ${item?.vote_average > 8 ? 'bg-green-500' : item?.vote_average >= 6 && item?.vote_average < 8 ? 'bg-yellow-500' : 'bg-red-500'}`}>
                            {item?.vote_average.toFixed(1)}
                        </div>
                        <div className="text-white text-[10px] lg:text-sm">{item.original_language.toUpperCase()}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieCard