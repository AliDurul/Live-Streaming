import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white'
            style={{ backgroundImage: `url('/images/404.png')` }}
        >
            <main className='text-center error-page--content z-10'>
                <h1 className='text-3xl md:text-7xl font-semibold mb-4'>Lost your way?</h1>
                <p className='mb-6 text-base md:text-xl'>
                    Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
                </p>
                <Link href={"/"} className='bg-primary-light hover:bg-primary-dark transition-all hover:text-white text-black py-2 px-4 rounded'>
                    Streamin Link Home
                </Link>
            </main>
        </div>
    )
}
