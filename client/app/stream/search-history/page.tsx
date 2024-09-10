'use client'
import React, { useEffect, useState } from 'react'
import { deleteSearchHistory, getSearchHistory } from '../streamActions';
import { toast } from 'react-toastify';
import { SMALL_IMG_BASE_URL } from '@/utils/constants';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/solid';

function formatDate(dateString: string) {
  // Create a Date object from the input date string
  const date = new Date(dateString);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Extract the month, day, and year from the Date object
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  // Return the formatted date string
  return `${month} ${day}, ${year}`;
}

export default function SearchHistoryPage() {
  const [searchHistory, setSearchHistory] = useState<any>([]);

  console.log(searchHistory);
  useEffect(() => {
    (
      async () => {
        const res = await getSearchHistory();
        if (res?.error) {
          console.log(res);
          setSearchHistory([])
        } else if (res?.success) {
          setSearchHistory(res?.content)
        }
      }
    )()
  }, [])

  const handleDelete = async (entry: any) => {

    const res = await deleteSearchHistory({ id: entry.id });
    if (res?.error) {
      console.log(res);
      toast.error("Failed to delete search item");
      return;
    } else if (res?.success) {
      setSearchHistory(searchHistory.filter((item: any) => item.id !== entry.id));
    }


  };

  if (searchHistory?.length === 0) {
    return (
      <div className='max-w-6xl mx-auto px-4 py-20'>
        <h1 className='text-3xl font-bold mb-8'>Search History</h1>
        <div className='flex justify-center items-center h-96'>
          <p className='text-xl'>No search history found</p>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-20 min-h-screen'>
      <h1 className='text-3xl font-bold mb-8'>Search History</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4'>
        {searchHistory?.map((entry: any) => (
          <div key={entry.id} className='bg-gray-800 p-4 rounded flex items-start'>
            {
              entry.image && (
                <Image
                  height={64}
                  width={64}
                  src={SMALL_IMG_BASE_URL + entry.image}
                  alt='History image'
                  className='size-16 rounded-full object-cover mr-4'
                />
              )
            }

            <div className='flex flex-col'>
              <span className='text-white text-lg'>{entry.title}</span>
              <span className='text-gray-400 text-sm'>{formatDate(entry.createdAt)}</span>
            </div>

            <span
              className={`py-1 px-3 min-w-20 text-center rounded-full text-sm  ml-auto ${entry.searchType === "movie"
                ? "bg-red-600"
                : entry.searchType === "tv"
                  ? "bg-blue-600"
                  : "bg-green-600"
                }`}
            >
              {entry.searchType[0].toUpperCase() + entry.searchType.slice(1)}
            </span>
            <TrashIcon
              className='size-5 ml-4 cursor-pointer hover:fill-red-600 hover:text-red-600'
              onClick={() => handleDelete(entry)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
