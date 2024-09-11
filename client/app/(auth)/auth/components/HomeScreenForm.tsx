'use client'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function HomeScreenForm() {
    const [email, setEmail] = useState("");
    const router = useRouter()

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/auth?email=" + email);
    };
    return (
        <form className='flex flex-col md:flex-row gap-4 w-2/3  md:w-1/2' onSubmit={handleFormSubmit} >
            <input
                type='email'
                placeholder='Email address'
                className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className='bg-primary hover:bg-primary-light transition-colors text-xl lg:text-2xl px-2 lg:px-3 py-1 md:py-2 rounded flex justify-center items-center'>
                Get Started
                <ChevronRightIcon className='pl-1 size-8 md:size-7' />
            </button>
        </form>
    )
}
