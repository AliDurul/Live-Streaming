import React from 'react'
import MovieCard from './MovieCard'

export const MovieList = () => {
    const movieList = [1,2,3,4]
    return (
        <div className='px-4 md:px-12 mt-4 space-y-4'>
            <div>
                <p className="text-white tex-md md:text-xl lg:text-2xl font-semibold mb-4">
                    Trending Movies
                </p>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    movieList.map((movie) => (
                        <MovieCard key={movie} movieList={movieList} />
                    ))
        }
            </div>
        </div>
    )
}
