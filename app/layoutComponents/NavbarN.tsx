'use client'
import { ArrowLeftStartOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Bars4Icon } from '@heroicons/react/24/solid';
import Link from 'next/link'
import React, { useState } from 'react'

export default function NavbarN() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);


    const setContentType = (content: string) => {
        console.log(content);
    }
    return (
        <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-16'>
            <div className='flex items-center gap-10 z-50'>
                <Link href='/'>
                    <img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
                </Link>

                {/* deskhrefp navbar items */}
                <div className='hidden sm:flex gap-2 items-center'>
                    <Link href='/' className='hover:underline' onClick={() => setContentType("movie")}>
                        Movies
                    </Link>
                    <Link href='/' className='hover:underline' onClick={() => setContentType("tv")}>
                        Tv Shows
                    </Link>
                    <Link href='/history' className='hover:underline'>
                        Search History
                    </Link>
                </div>
            </div>

            <div className='flex gap-2 items-center z-50'>
                <Link href={"/search"}>
                    <MagnifyingGlassIcon className='size-6 cursor-pointer' />
                </Link>
                <img src={""} alt='Avatar' className='h-8 rounded cursor-pointer' />
                <ArrowLeftStartOnRectangleIcon className='size-6 cursor-pointer'  />
                <div className='sm:hidden'>
                    <Bars4Icon className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
                </div>
            </div>

            {/* mobile navbar items */}
            {isMobileMenuOpen && (
                <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                    <Link href={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                        Movies
                    </Link>
                    <Link href={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                        Tv Shows
                    </Link>
                    <Link href={"/history"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                        Search History
                    </Link>
                </div>
            )}
        </header>
    )
}
