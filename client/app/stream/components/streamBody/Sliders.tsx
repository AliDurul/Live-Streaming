'use client'
import { MOVIE_CATEGORIES, TV_CATEGORIES } from '@/utils/constants'
import React, { useEffect } from 'react'
import useStreamStore from '@/stores/store'
import StreamSwiper from './StreamSwiper'

export default function Sliders() {

  const { contentType } = useStreamStore()


  return (
    <>
      {
        contentType === 'movie'
          ? MOVIE_CATEGORIES.map(category => <StreamSwiper key={category} category={category} />)
          : TV_CATEGORIES.map(category => <StreamSwiper key={category} category={category} />)
      }
    </>
  )
}
