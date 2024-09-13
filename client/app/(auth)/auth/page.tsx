import Image from 'next/image'
import React from 'react'
import SignInForm from './components/SignInForm'
import Link from 'next/link'
import netflixLogo from '../../../public/images/netflix-logo.png'
import logoNew from '../../../public/images/logoNew.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Authenticating | StreamLink",
    description: "Created By Ali Durul",
};

export default function AuthPage() {
    return (
        <div className="realative h-full w-full bg-[url('/images/hero.jpg')] bg-fixed bg-no-repeat bg-cover" >
            <div className="bg-black w-full h-full lg:bg-opacity-60">
                <nav className='px-12 py-5 '>
                    <Link href={'/'} className=''>
                        <Image src={logoNew} width={130} alt='logo' className='mx-auto md:mx-0' />
                    </Link>
                </nav>
                <div className="flex justify-center pt-5">
                    <div className="bg-black bg-opacity-80 px-10 md:py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                        <SignInForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
