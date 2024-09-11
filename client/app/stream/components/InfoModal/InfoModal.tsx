'use client'
import useStreamStore from '@/stores/store'
import { XMarkIcon, PlayIcon, PlusIcon } from '@heroicons/react/24/solid'
import React, { useCallback, useEffect, useState } from 'react'
import HeaderPlayBtn from '../streamHeader/HeaderPlayBtn'
import ReactPlayer from 'react-player/lazy'
import { getTrailers } from '../../streamActions'

interface InfoModalProps {
    visible: boolean
    onClose?: any
}


export const InfoModal = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [trailer, setTrailer] = useState<any>([])
    const { contentInfo, closeModal, isOpen, contentType } = useStreamStore()

    useEffect(() => {
        (async () => {
            const resTrailer = await getTrailers({ contentType, id: contentInfo?.id })

            if (resTrailer?.error) {
                setTrailer([])
            } else if (resTrailer?.success) {
                console.log(resTrailer);
                setTrailer(resTrailer?.trailers[0])
            }
        }
        )()
        setIsVisible(!!isOpen);
    }, [contentInfo?.id, contentType, isOpen])

    const handleClose = useCallback(() => {
        setIsVisible(false)
        setTimeout(() => {
            closeModal()
        }, 300)
    }, [closeModal])

    if (!isVisible) return null

    return (
        <div className={` z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 px-2 md:px-0`}>
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${isVisible ? 'scale-100' : 'scale-0'} transfrom duration-300 relative flex-auto bg-zinc-900 drop-shadow-sm`}>
                    <div className='relative h-96'>
                        <ReactPlayer
                            controls={false}
                            width={"100%"}
                            playing={true}
                            height={"100%"}
                            className=' brightness-[60%] object-cover '
                            url={`https://www.youtube.com/watch?v=${trailer?.key}`}
                        />
                        <div onClick={handleClose} className='h-10 w-10 rounded-full bg-black text-white absolute top-3 right-3 cursor-pointer bg-opacity-70 flex items-center justify-center '>
                            <XMarkIcon className='h-6 w-6 text-white' />
                        </div>

                        <div className="absolute bottom-[10%] left-10">
                            <p className='text-white  text-xl md:text-3xl h-full lg:text-4xl font-bold mb-8'>
                                {contentInfo?.original_name || contentInfo?.original_title}{" "}
                            </p>

                            <div className="flex flex-row gap-4 items-center">
                                <HeaderPlayBtn id={contentInfo?.id} />
                                <div className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
                                    <PlusIcon className=' h-7 w-7 text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 md:px-12 py-5 flex flex-col gap-5">
                        <div className='flex  justify-between text-base md:text-lg'>
                            <p className="text-white font-semibold ">
                                {contentInfo?.release_date || contentInfo?.first_air_date}
                            </p>
                            <p className="text-primary-light  ">{trailer?.type}</p>
                            <p className="text-white ">
                                {contentInfo?.adult ? "18+" : "PG-13"}
                            </p>

                        </div>
                        <div className=''>
                            <p className="text-white text-sm  md:text-lg">
                                {contentInfo?.overview.length > 150
                                    ? contentInfo?.overview.slice(0, 150) + "..."
                                    : contentInfo?.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
