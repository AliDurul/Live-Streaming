import useStreamStore from '@/stores/store';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';


export default function useTrendingContent() {

    const API_BASEURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [trendingContent, setTrendingContent] = useState(null);
    const { contentType } = useStreamStore();

    useEffect(() => {
        const getTrendingContent = async () => {
            try {
                const res = await axios.get(`${API_BASEURL}/${contentType}/trending`);
                console.log('line 15 red', res);
                setTrendingContent(res.data.content);
            } catch (error) {
                toast.error('Failed to fetch trending content');
                console.log('line 12 red', error);
            }

        };

        getTrendingContent();
    }, [contentType, API_BASEURL]);

    return { trendingContent };
}
