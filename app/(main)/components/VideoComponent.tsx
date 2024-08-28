'use client'
import React, { useState } from 'react'

export default function VideoComponent() {
    const [imgLoading, setImgLoading] = useState(true)

    return (
        <>
            {imgLoading && (
                <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
            )}
            <video
                autoPlay
                muted
                loop
                poster='/images/logo.jpg'
                src='/images/The Icon Zambia.mp4'
                className='object-cover w-full h-full brightness-75 '
                onLoad={() => { setImgLoading(false); console.log('loaded') }}
            >
            </video>
        </>
    )
}
