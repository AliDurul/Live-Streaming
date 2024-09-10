'use client'
import { getContentDetails, getSimilarContent, getTrailers } from '@/app/stream/streamActions'
import useStreamStore from '@/stores/store'
import React, { useEffect, useState } from 'react'
import { WatchBackBtn } from './WatchBackBtn'
import WatchSkeleton from './WatchSkeleton'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import { ORIGINAL_IMG_BASE_URL } from '@/utils/constants'
import { formatReleaseDate } from '@/utils/dateFormatter'
import Link from 'next/link'
import WatchSimilarSwiper from './WatchSimilarSwiper'

export default function WatchHero({ contentId }: { contentId: string }) {

    const [trailers, setTrailers] = useState<any>([]);
    const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<any>();
    const [similarContent, setSimilarContent] = useState([]);
    const { contentType } = useStreamStore();

    console.log(similarContent);


    useEffect(() => {
        (async () => {
            const resTrailer = await getTrailers({ contentType, id: contentId })

            if (resTrailer?.error) {
                setTrailers([])
            } else if (resTrailer?.success) {
                console.log(resTrailer);
                setTrailers(resTrailer?.trailers)
            }

            const resContent = await getContentDetails({ contentType, id: contentId })

            if (resContent?.error) {
                setContent([])
            } else if (resContent?.success) {
                console.log(resContent);
                setContent(resContent?.content)
            }

            const simContent = await getSimilarContent({ contentType, id: contentId })

            if (simContent?.error) {
                setSimilarContent([])
            } else if (simContent?.success) {
                console.log('line 47', simContent);
                setSimilarContent(simContent?.similar)
            }

            setLoading(false);


        })()
    }, [contentId, contentType])

    const handleNext = () => {
        if (currentTrailerIdx < trailers.length - 1) setCurrentTrailerIdx(currentTrailerIdx + 1);
    };
    const handlePrev = () => {
        if (currentTrailerIdx > 0) setCurrentTrailerIdx(currentTrailerIdx - 1);
    };


    if (loading)
        return (
            <div className='min-h-screen bg-black p-20'>
                <WatchSkeleton />
            </div>
        );

    if (!content) {
        return (
            <h2 className='pt-52 text-center text-2xl sm:text-5xl font-bold text-balance'>Content not found 😥</h2>
        );
    }

    console.log(contentId);
    return (
        <div className='py-14 text-white'>
            <WatchBackBtn content={content} />

            {trailers.length > 0 && (
                <div className=' flex  justify-between items-center mb-4 px-32'>
                    <button
                        className={`
							bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${currentTrailerIdx === 0 ? "opacity-50 cursor-not-allowed " : ""
                            }}
							`}
                        disabled={currentTrailerIdx === 0}
                        onClick={handlePrev}
                    >
                        <ChevronLeftIcon className='size-7' />
                    </button>

                    <button
                        className={`
							bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${currentTrailerIdx === trailers.length - 1 ? "opacity-50 cursor-not-allowed " : ""
                            }}
							`}
                        disabled={currentTrailerIdx === trailers.length - 1}
                        onClick={handleNext}
                    >
                        <ChevronRightIcon className='size-7' />
                    </button>
                </div>
            )}

            <div className='aspect-auto mb-8 p-4 sm:px-10 md:px-32'>
                {trailers.length > 0 && (
                    <ReactPlayer
                        controls={true}
                        width={"100%"}
                        height={"70vh"}
                        className='mx-auto overflow-hidden rounded-lg'
                        url={`https://www.youtube.com/watch?v=${trailers[currentTrailerIdx].key}`}
                    />
                )}

                {trailers?.length === 0 && (
                    <h2 className='text-xl text-center mt-5'>
                        No trailers available for{" "}
                        <span className='font-bold text-red-600'>{content?.title || content?.name}</span> 😥
                    </h2>
                )}
            </div>

            <div className=' pt-16 flex flex-col md:flex-row items-center justify-between gap-20 
				max-w-6xl mx-auto'>
                <div className='mb-4 md:mb-0 text-white'>
                    <h2 className='text-5xl font-bold text-balance'>{content?.title || content?.name}</h2>

                    <p className='mt-2 text-lg'>
                        {formatReleaseDate(content?.release_date || content?.first_air_date)} |{" "}
                        {content?.adult ? (
                            <span className='text-red-600'>18+</span>
                        ) : (
                            <span className='text-green-600'>PG-13</span>
                        )}{" "}
                    </p>
                    <p className='mt-4 text-lg'>{content?.overview}</p>
                </div>
                <Image width={300} height={450}
                    src={ORIGINAL_IMG_BASE_URL + content?.poster_path}
                    alt={content?.title || content?.name} />
            </div>


            {similarContent.length > 0 && (
                <div className='text-white mt-12 p-5  max-w-full mx-auto relative'>
                    <h3 className='text-3xl font-bold mb-4'>Similar Movies/Tv Show</h3>
                    <WatchSimilarSwiper content={similarContent} />
                </div>
            )}
        </div>
    )
}
