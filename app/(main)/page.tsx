import React from 'react'
import BillBoard from './components/BillBoard'
import { MovieList } from './components/MovieList'

export default async function page() {
    return (
        <div className='text-white'>
            <BillBoard />
            <div className="pb-40">
                <MovieList />
            </div>
        </div>
    )
}
