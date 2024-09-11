'use client'
import useStreamStore from '@/stores/store';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { useState } from 'react'
import { search } from '../streamActions';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { ORIGINAL_IMG_BASE_URL } from '@/utils/constants';

export default function SearchPage() {
    const [activeTab, setActiveTab] = useState("movie");
    const [searchTerm, setSearchTerm] = useState("");

    const [results, setResults] = useState<any>([]);
    const { setContentType } = useStreamStore();

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
        tab === "movie" ? setContentType("movie") : setContentType("tv");
        setResults([]);
    };

    const handleSearch = async (e: any) => {
        e.preventDefault();
        const resSearch = await search({ activeTab, searchTerm })
        if (resSearch?.error) {
            console.log(resSearch);
            toast.error(resSearch.message || "Nothing found, make sure you are searching under the right category");
            setResults([])
        } else if (resSearch?.success) {
            console.log('line 32', resSearch);
            setResults(resSearch?.content)
        }
    }

    return (
        <div className='container mx-auto px-4 py-20'>
            <div className='flex justify-center gap-3 mb-4'>
                <button
                    className={`py-2 px-4 rounded ${activeTab === "movie" ? "bg-red-600" : "bg-gray-800"
                        } hover:bg-red-700`}
                    onClick={() => { handleTabClick("movie"); setSearchTerm('') }}
                >
                    Movies
                </button>
                <button
                    className={`py-2 px-4 rounded ${activeTab === "tv" ? "bg-red-600" : "bg-gray-800"
                        } hover:bg-red-700`}
                    onClick={() => { handleTabClick("tv"); setSearchTerm('') }}
                >
                    TV Shows
                </button>
                <button
                    className={`py-2 px-4 rounded ${activeTab === "person" ? "bg-red-600" : "bg-gray-800"
                        } hover:bg-red-700`}
                    onClick={() => { handleTabClick("person"); setSearchTerm('') }}
                >
                    Person
                </button>
            </div>

            <form className='flex gap-2 items-stretch mb-8 max-w-2xl mx-auto' onSubmit={handleSearch}>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={"Search for a " + activeTab}
                    className='w-full p-2 rounded bg-gray-800 text-white'
                />
                <button className='bg-red-600 hover:bg-red-700 text-white p-2 rounded'>
                    <MagnifyingGlassIcon className='size-6' />
                </button>
            </form>

            <div className='text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {results.map((result: any) => {
                    if (!result.poster_path && !result.profile_path) return null;

                    return (
                        <div key={result.id} className='bg-gray-800 p-4 rounded'>
                            {activeTab === "person" ? (
                                <div className='group flex flex-col items-center overflow-hidden'>
                                    <Image
                                        height={380}
                                        width={250}
                                        src={ORIGINAL_IMG_BASE_URL + result.profile_path}
                                        alt={result.name}
                                        className='max-h-96 rounded mx-auto group-hover:scale-125 transition-transform'
                                    />
                                    <h2 className='mt-2 text-xl font-bold'>{result.name}</h2>
                                </div>
                            ) : (
                                <Link
                                    href={"/stream/watch/" + result.id}
                                    onClick={() => {
                                        setContentType(activeTab);
                                    }}
                                >
                                    <Image
                                        height={380}
                                        width={250}
                                        src={ORIGINAL_IMG_BASE_URL + result.poster_path}
                                        alt={result.title || result.name}
                                        className='w-full h-auto rounded'
                                    />
                                    <h2 className='mt-2 text-xl font-bold'>{result.title || result.name}</h2>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
