'use client'
import React, {useEffect, useState } from 'react'
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import useStreamStore from '@/stores/store';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import netflixLogo from "@/public/images/netflix-logo.png"
import logo from "@/public/images/logo.png"
import { signOut } from "next-auth/react"
import { ArrowLeftStartOnRectangleIcon, Bars4Icon } from '@heroicons/react/24/solid';



const pages = [
    { label: 'Search History', href: '/stream/search-history' },
    { label: 'Live', href: '/stream/live' },

]

const buttons = [
    { label: 'Tv Series', value: 'tv' },
    { label: 'Movies', value: 'movie' },

]

const profileLinks = [
    { label: 'Your Profile', href: '#' },
]

const TOP_OFFSET = 66;

export const Navbar = () => {
    const { data: session } = useSession()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const [showbg, setShowbg] = useState(false)
    const { setContentType, contentType } = useStreamStore()
    const router = useRouter()
    const pathname = usePathname()


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > TOP_OFFSET) {
                setShowbg(true)
            } else {
                setShowbg(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <header className={`fixed w-full z-40 transition duration-75 ${showbg ? 'bg-zinc-900 bg-opacity-80 shadow-md backdrop-blur-lg' : ''}`}>
            <div className={`max-w-7xl relative mx-auto flex flex-wrap items-center justify-between p-4 h-20`}>
                <div className='flex items-center gap-10  z-50'>
                    <Link href='/stream'>
                        <Image src={logo} alt='Netflix Logo' className='w-12' />
                    </Link>

                    {/* desktop navbar items */}
                    <div className='hidden lg:flex gap-x-4  items-center'>
                        {
                            buttons.map((btn, i) => (
                                <button key={i}
                                    className={` ${pathname === '/stream' && contentType === btn.value ? 'text-primary-dark font-bold' : 'text-white'} px-3 py-2 text-sm font-semibold cursor-pointer hover:text-primary-light transition`}
                                    onClick={() => { setContentType(btn.value); router.push('/stream') }}>
                                    {btn.label}
                                </button>
                            ))
                        }
                        {
                            pages.map((page, i) => (
                                <Link href={page.href} key={i} className={` ${pathname === page.href ? 'text-primary-dark font-bold' : 'text-white'} px-3 py-2 text-sm font-semibold cursor-pointer hover:text-primary-light transition`} >
                                    {page.label}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className='flex space-x-4 items-center z-50'>
                    {
                        session && (
                            <Link href={"/stream/search"}>
                                <MagnifyingGlassIcon className='size-7 cursor-pointer text-white' />
                            </Link>
                        )
                    }
                    {
                        session && (
                            <div className="relative group">
                                <Image
                                    src={session?.user?.picture.startsWith('https') ? session.user.picture : `/images${session?.user.picture}`}
                                    width={32}
                                    height={32}
                                    alt='Avatar'
                                    className='  h-8 rounded cursor-pointer'
                                />
                                <p className='absolute opacity-0 min-w-full transform translate-y-2 -left-4 top-10 text-white bg-black p-3 rounded shadow-lg transition duration-300 cursor-pointer group-hover:opacity-100 group-hover:translate-y-0'>
                                    {session?.user.name}
                                </p>
                            </div>
                        )
                    }

                    {
                        session ? (
                            <ArrowLeftStartOnRectangleIcon className='size-8 text-white cursor-pointer' onClick={() => signOut()} />
                        ) : (
                            <Link href={"/auth"}>
                                Sign In
                            </Link>
                        )
                    }
                    {/* MENU BUTTON */}
                    <div className='lg:hidden'>
                        <Bars4Icon className='size-8 text-white cursor-pointer' onClick={toggleMobileMenu} />
                    </div>
                </div>

                {/* mobile navbar items */}
                {isMobileMenuOpen && (
                    <div className='absolute lg:hidden w-1/3 top-16 right-4  z-50 bg-black border rounded border-gray-800 '>
                        {
                            buttons.map((btn, i) => (
                                <button key={i} className={` ${contentType === btn.value ? 'text-primary-dark font-bold' : 'text-white'} px-3 py-2 text-sm font-semibold cursor-pointer hover:text-primary-light transition`} onClick={() => setContentType(btn.value)}>
                                    {btn.label}
                                </button>
                            ))
                        }
                        {
                            pages.map((page, i) => (
                                <Link key={i} href={page.href} className={`block hover:underline underline-offset-4 p-2 ${pathname === page.href ? 'text-primary-dark underline font-bold': 'text-white' }`} onClick={toggleMobileMenu}>
                                    {page.label}
                                </Link>
                            ))
                        }
                    </div>
                )}
            </div>
        </header>

    )
}
