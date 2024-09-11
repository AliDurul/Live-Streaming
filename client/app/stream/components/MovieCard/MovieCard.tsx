
import Image from 'next/image'
import React from 'react'
import { ORIGINAL_IMG_BASE_URL } from '@/utils/constants'
import MovieCardBtns from './MovieCardBtns'
import MovieCardImg from './MovieCardImg'
import useStreamStore from '@/stores/store'

interface MovieCardProps {
    item: any
}

const MovieCard = ({ item }: MovieCardProps) => {
    const { openModal } = useStreamStore()


    return (
        // <div className='group bg-zinc-900 col-span relative z-50' >
        //     <Image
        //         onClick={() => openModal(item)}
        //         src={ORIGINAL_IMG_BASE_URL + item?.backdrop_path}
        //         height={100} width={200} alt='thumbnail' loading={'lazy'}
        //         className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 md:group-hover:opacity-0 delay-300 w-full ' />

        //     <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible md:visible delay-300 w-full scale-0 group-hover:scale-100 md:group-hover:-translate-y-[5vw] group-hover:opacity-100'>
        //         <Image
        //             src={ORIGINAL_IMG_BASE_URL + item?.backdrop_path}
        //             height={100} width={200} alt='thumbnail'
        //             className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full' />
        //         <div className=' z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition  shadow-md rounded-b-md '>
        //             <MovieCardBtns item={item} />
        //             <p className='text-green-400 font-semibold mt-4'>
        //                 {item?.original_name || item?.original_title}{" "}
        //                 <span className='text-white '>
        //                     {item?.release_date?.split("-")[0] ||
        //                         item?.first_air_date.split("-")[0]}{" "}
        //                     | {item?.adult ? "18+" : "PG-13"}
        //                 </span>
        //             </p>
        //             <div className="flex flex-wrap mt-4 gap-2 items-center justify-between">
        //                 <div className={`text-white text-[10px] lg:text-sm p-3 font-bold rounded-sm ${item?.vote_average > 8 ? 'bg-green-500' : item?.vote_average >= 6 && item?.vote_average < 8 ? 'bg-yellow-500' : 'bg-red-500'}`}>
        //                     {item?.vote_average.toFixed(1)}
        //                 </div>
        //                 <div className="text-white text-[10px] lg:text-sm">{item.original_language.toUpperCase()}</div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className='group border-separate border-primary-light'>
            <div className=' bg-zinc-900 col-span relative overflow-hidden ' >
                <Image
                    onClick={() => openModal(item)}
                    src={ORIGINAL_IMG_BASE_URL + item?.backdrop_path}
                    height={100} width={200} alt='thumbnail' loading={'lazy'}
                    className='cursor-pointer object-cover transition duration shadow-xl group-hover:scale-125 rounded-md  w-full ' />


            </div>
            <div className=' flex   p-2 justify-between rounded-b-md '>
                {/* <MovieCardBtns item={item} /> */}
                <p className='text-white font-semibold mt-4'>
                    {item?.original_name || item?.original_title}{" "}
                </p>
                <p className={`text-white text-[10px] lg:text-sm p-1 my-auto font-bold rounded-sm ${item?.vote_average > 8 ? 'bg-green-500' : item?.vote_average >= 6 && item?.vote_average < 8 ? 'bg-yellow-500' : 'bg-red-500'}`}>
                    {item?.vote_average.toFixed(1)}
                </p>
                {/* <div className="flex flex-wrap mt-4 gap-2 items-center justify-between">
                    
                    <div className="text-white text-[10px] lg:text-sm">{item.original_language.toUpperCase()}</div>
                </div> */}
            </div>
        </div>
    )
}

export default MovieCard