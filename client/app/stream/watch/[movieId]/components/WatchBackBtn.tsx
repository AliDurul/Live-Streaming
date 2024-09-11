'use client'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import React from 'react'

export const WatchBackBtn = ({ content }: { content: any }) => {
    const router = useRouter()
    return (
        <nav className=' w-full p-4 pt-10 z-10 flex flex-row  items-center gap-3 bg-black bg-opacity-70'>
            <ArrowLeftIcon className='size-7 text-white cursor-pointer' onClick={() => router.back()} />
            <p className='text-white text-xl md:text-3xl font-bold'>
                <span className='font-light'>Watching : </span> {content?.title || content?.name}
            </p>
        </nav>
    )
}
