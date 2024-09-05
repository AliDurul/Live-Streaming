import Image from 'next/image'
import React from 'react'
import SignInForm from './components/SignInForm'
import Link from 'next/link'
import netflixLogo from '../../../public/images/netflix-logo.png'

export default function AuthPage() {
    return (
        <div className="realative h-full w-full bg-[url('/images/hero.png')] bg-center bg-fixed bg-no-repeat bg-cover" >
            <div className="bg-black w-full h-full lg:bg-opacity-60">
                <nav className='px-12 py-5'>
                    <Link href={'/'}>
                        <Image src={netflixLogo} width={250} alt='logo' />
                    </Link>
                </nav>
                <div className="flex justify-center pt-5">
                    <div className="bg-black bg-opacity-80 px-10 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                        <SignInForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
