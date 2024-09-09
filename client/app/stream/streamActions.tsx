'use server'

import axios from "axios";
import { Linefont } from "next/font/google";


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
type GetContent = { contentType: string, category: string };
type GetTrailersType = { contentType: string, id: string };

// const axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Next-Revalidate': '900' // 15 minutes in seconds
//     }
// });

// axiosInstance.interceptors.request.use(config => {
//     // const token = getAuthToken(); // Assume this function retrieves the token
//     // if (token) {
//     //     config.headers['Authorization'] = `Bearer ${token}`;
//     // }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });


// export const getContent = async ({ contentType, category }: GetContent) => {
//     try {
//         const res = await axiosInstance.get(`/${contentType}/${category}`);
//         console.log('line30--> ');
//         return res.data;
//     } catch (error: any) {
//         const res = error.response?.data || { error: true, message: 'An error occurred refreshing the page. Please try again later.' };
//         return res;
//     }
// };

export const getContent = async ({ contentType, category }: GetContent) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${contentType}/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // next: { revalidate: 900 }
        })
        const jsonRes = await res.json()

        // console.log('line46-->', jsonRes);

        return jsonRes;


    } catch (error: any) {
        const res = error.response?.data || { error: true, message: 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}

export const getTrailers = async ({ contentType, id }: GetTrailersType) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${contentType}/${id}/trailers`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const jsonRes = await res.json()

        console.log('line68-->', jsonRes);

        return jsonRes;

    } catch (error: any) {
        const res = error.response?.data || { error: true, message: 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}

export const getContentDetails = async ({ contentType, id }: GetTrailersType) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${contentType}/${id}/details`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const jsonRes = await res.json()

        console.log('line68-->', jsonRes);

        return jsonRes;

    } catch (error: any) {
        const res = error.response?.data || { error: true, message: 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}

export const getSimilarContent = async ({ contentType, id }: GetTrailersType) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${contentType}/${id}/similar`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const jsonRes = await res.json()

        return jsonRes;

    } catch (error: any) {
        const res = error.response?.data || { error: true, message: 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}

