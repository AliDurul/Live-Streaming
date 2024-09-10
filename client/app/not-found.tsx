import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white'
            style={{ backgroundImage: `url('/images/404.png')` }}
        >
            <header className='absolute top-0 left-0 p-4 bg-black w-full '>
                <Link href={"/"}>
                    <Image width={250} height={100} src='/images/netflix-logo.png' alt='Netflix' className='h-auto' />
                </Link>
            </header>
            <main className='text-center error-page--content z-10'>
                <h1 className='text-7xl font-semibold mb-4'>Lost your way?</h1>
                <p className='mb-6 text-xl'>
                    Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
                </p>
                <Link href={"/"} className='bg-white text-black py-2 px-4 rounded'>
                    Netflix Home
                </Link>
            </main>
        </div>
    )
}
