import React from 'react'
import BillBoard from './components/BillBoard'
import { MovieList } from './components/MovieList'
import { Navbar } from '../layoutComponents/Navbar'
import { InfoModal } from './components/InfoModal'

export default async function page() {
    return (
        <div className='text-white'>
            <InfoModal />
            <BillBoard />
            <div className="pb-40">
                <MovieList />
            </div>
        </div>
    )
}
