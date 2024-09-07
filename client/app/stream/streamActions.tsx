'use server'

import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Next-Revalidate': '900' // 15 minutes in seconds
    }
});

axiosInstance.interceptors.request.use(config => {
    // const token = getAuthToken(); // Assume this function retrieves the token
    // if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
}, error => {
    return Promise.reject(error);
});

type GetContent = { contentType: string, category: string };

export const getContent = async ({ contentType, category }: GetContent) => {
    try {
        const res = await axiosInstance.get(`/${contentType}/${category}`);
        console.log('line30--> ');
        return res.data;
    } catch (error: any) {
        const res = error.response.data || { error: true, message: 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
};


