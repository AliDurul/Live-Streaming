'use client'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { userInfo } from '@/types/next-auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProfileBox = ({ userInfo }: any) => {
    const router = useRouter()
    return (
        <div className="group flex-row w-44 mx-auto cursor-pointer" onClick={() => { router.replace('/stream') }}>
            <div className="w-44 h-44 rounded-md flex items-center border-2 border-transparent group-hover:border-white overflow-hidden">
                <Image src='/images/avatar1.png' alt='profile' width={176} height={176} />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{userInfo?.name}</div>
        </div>
    )
}

export default ProfileBox