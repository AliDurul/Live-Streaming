import { ArrowLeftIcon, BackspaceIcon, BackwardIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { WatchBackBtn } from './components/WatchBackBtn';
import { getContentDetails, getTrailers } from '../../streamActions';
import WatchHero from './components/WatchHero';
import { Metadata } from 'next';

type MovieIdPageProps = {
  params: {
    movieId: string;
  };
};


export async function generateMetadata({ params }: MovieIdPageProps): Promise<Metadata> {

  const res = await getContentDetails({ contentType: 'movie', id: params.movieId });
  const content = res?.content;

  return {
    title: `${content?.title || content?.name} | StreamLink`,
  }

}


export const MovieIdPage = ({ params }: MovieIdPageProps) => {

  const { movieId } = params;

  return (
    <div className='min-h-screen w-screen bg-black'>

      <WatchHero contentId={movieId} />

    </div>
  )
}

export default MovieIdPage
