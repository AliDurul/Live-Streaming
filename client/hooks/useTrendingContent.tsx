import useStreamStore from '@/stores/store';
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function useTrendingContent() {

    const API_BASEURL = process.env.NEXT_PUBLIC_API_BASEURL;
    const [trendingContent, setTrendingContent] = useState(null);
    const { contentType } = useStreamStore();

    useEffect(() => {
        const getTrendingContent = async () => {
            const res = await axios.get(`${API_BASEURL}/${contentType}/trending`);
            setTrendingContent(res.data.content);
        };

        getTrendingContent();
    }, [contentType, API_BASEURL]);

    return { trendingContent };
}
