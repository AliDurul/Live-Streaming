import { ArrowLeftIcon, BackspaceIcon, BackwardIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { WatchBackBtn } from './components/WatchBackBtn';
import { getTrailers } from '../../streamActions';
import WatchHero from './components/WatchHero';

type MovieIdPageProps = {
  params: {
    movieId: string;
  };
};


export const MovieIdPage = ({ params }: MovieIdPageProps) => {

  const { movieId } = params;

  return (
    <div className='min-h-screen w-screen bg-black'>

      <WatchHero contentId={movieId} />

    </div>
  )
}

export default MovieIdPage
