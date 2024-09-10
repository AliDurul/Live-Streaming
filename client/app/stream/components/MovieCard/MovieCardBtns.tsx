'use client'
import React from 'react'
import { PlayIcon, PlusIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import useStreamStore from '@/stores/store'

export default function MovieCardBtns({ item }: { item: any }) {
    const router = useRouter()
    const { openModal } = useStreamStore()

    return (
        <div className='flex flex-row items-center gap-3'>
            <div onClick={() => router.push(`/stream/watch/${item.id}`)} className="cursor-pointer w-66 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 ">
                <PlayIcon className='h-5 w-5 text-black' />
            </div>
            <div className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
                <PlusIcon className='h-7 w-7 text-white' />
            </div>
            <div onClick={() => openModal(item)} className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
                <ChevronDownIcon className='h-5 w-5 text-white group-hover/item:text-neutral-300' />
            </div>
        </div>
    )
}
