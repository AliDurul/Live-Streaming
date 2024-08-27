'use client'
import useStore from '@/store/useStore'
import React from 'react'

export const BillBoardMoreInfoBtn = () => {
    const { openModal } = useStore()
    return (
        <button onClick={() => openModal('1234')} className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">More detail</button>
    )
}
