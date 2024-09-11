import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeScreenForm from './(auth)/auth/components/HomeScreenForm'
import netflixLogo from '../public/images/netflix-logo.png'
import logo from '../public/images/logo.png'
import logoText from '../public/images/logo-text.png'
import tv from '../public/images/tv.png'
import strangerBg from '../public/images/stranger-things-lg.png'
import strangerSm from '../public/images/stranger-things-sm.png'
import dowloadIcon from '../public/images/download-icon.gif'
import devicePile from '../public/images/device-pile.png'
import kids from '../public/images/kids.png'


export default async function MainPage() {

    return (
        <div className="relative md:bg-contain bg-no-repeat bg-hero-gradient  " >
            {/* Navbar */}
            <header className='max-w-6xl mx-auto flex items-center justify-between p-4 py-10'>
                <Image src={logoText} className='w-20 md:w-28' alt='Netflix Logo' />
                <Link href={"/auth"} className='text-white bg-primary hover:bg-primary-light transition-colors py-1 px-3 md:py-2 md:px-5 rounded'>
                    Sign In
                </Link>
            </header>

            {/* hero section */}
            <div className='flex flex-col items-center justify-center text-center py-10 md:py-32 text-white max-w-6xl mx-auto'>
                <h1 className='text-2xl md:text-6xl font-bold mb-4'>Endless Entertainment at Your Fingertips</h1>
                <p className='text-base md:text-xl mb-4'>Stream your favorite movies and series anytime, anywhere. No ads, no hassle—just pure entertainment.</p>
                <p className='mb-4 text-base md:text-lg'>Join now to explore! Start your free trial today and dive into a world of excitement.</p>
                <HomeScreenForm />
            </div>

            {/* separator */}
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

            {/* 1st section */}
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    {/* left side */}
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-3xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
                        <p className='text-base md:text-xl'>
                            Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </p>
                    </div>
                    {/* right side */}
                    <div className='flex-1 relative'>
                        <Image src={tv} alt='Tv image' className='mt-4 z-20 relative' />
                        <video
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
                            playsInline
                            autoPlay={true}
                            muted
                            loop
                            src='/images/hero-vid.m4v'
                        >
                        </video>
                    </div>
                </div>
            </div>

            {/* separator */}
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

            {/* 2nd section */}
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
                    {/* left side */}
                    <div className='flex-1 relative'>
                        <div className='relative'>
                            <Image src={strangerBg} alt='Stranger Things img' className='mt-4 ' />

                            <div className='overflow-hidden flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2'>
                                <Image src={strangerSm} alt='image' className='mt-10' />
                                <div className=' flex justify-between items-center w-full'>
                                    <div className='flex flex-col gap-0'>
                                        <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                                        <span className='text-sm text-blue-500'>Downloading...</span>
                                    </div>

                                    {/* <Image src={dowloadIcon} alt='' className='h-12 ' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side */}

                    <div className='flex-1 md:text-left text-center'>
                        <h2 className='text-3xl md:text-5xl font-extrabold mb-4 text-balance'>
                            Download your shows to watch offline
                        </h2>
                        <p className='text-base md:text-xl'>
                            Save your favorites easily and always have something to watch.
                        </p>
                    </div>
                </div>
            </div>

            {/* separator */}

            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

            {/* 3rd section */}
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    {/* left side */}
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-3xl md:text-5xl font-extrabold mb-4'>Watch everywhere</h2>
                        <p className='text-base md:text-xl'>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>
                    </div>

                    {/* right side */}
                    <div className='flex-1 relative overflow-hidden'>
                        <Image src={devicePile} alt='Device image' className='mt-4 z-20 relative ' />
                        <video className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]'
                            playsInline
                            autoPlay={true}
                            muted
                            loop
                        >
                            <source src='/images/video-devices.m4v' type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>

            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

            {/* 4th section*/}
            <div className='py-10 bg-black text-white'>
                <div
                    className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'
                >
                    {/* left */}
                    <div className='flex-1 relative'>
                        <Image src={kids} alt='Enjoy on your TV' className='mt-4' />
                    </div>
                    {/* right */}
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-3xl md:text-5xl font-extrabold mb-4'>Create profiles for kids</h2>
                        <p className='text-base md:text-xl'>
                            Send kids on adventures with their favorite characters in a space made just for them—free
                            with your membership.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
