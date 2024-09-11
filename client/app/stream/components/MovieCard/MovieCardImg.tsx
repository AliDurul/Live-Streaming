
import useStreamStore from '@/stores/store'
import { ORIGINAL_IMG_BASE_URL } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

export default function MovieCardImg({ item }: any) {
    const { openModal } = useStreamStore()

    return (
        <Image
            onClick={() => openModal(item)}
            src={ORIGINAL_IMG_BASE_URL + item?.backdrop_path}
            height={100} width={200} alt='thumbnail' loading={'lazy'}
            className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full ' />
    )
}
