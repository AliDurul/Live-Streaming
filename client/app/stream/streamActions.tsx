'use server'

import { auth } from "@/auth";


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
type GetContent = { contentType: string, category: string };
type GetTrailersType = { contentType: string, id: string };

const authConfig = async () => {
    const session = await auth();
    const accessToken = session?.access;

    return {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    };
};

export const getContent = async ({ contentType, category }: GetContent) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${contentType}/${category}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // next: { revalidate: 900 }
        })
        const jsonRes = await res.json()

        // console.log('line46-->', jsonRes);
        if (!res.ok) throw new Error(jsonRes.message || 'An error occurred refreshing the page. Please try again later.');


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

        // console.log('line68-->', jsonRes);
        if (!res.ok) throw new Error(jsonRes.message || 'An error occurred refreshing the page. Please try again later.');


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

        if (!res.ok) throw new Error(jsonRes.message || 'An error occurred refreshing the page. Please try again later.');


        // console.log('line68-->', jsonRes);

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

        if (!res.ok) throw new Error(jsonRes.message || 'An error occurred refreshing the page. Please try again later.');


        return jsonRes;

    } catch (error: any) {
        const res = error.response?.data || { error: true, message: 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}

type SearchProps = { activeTab: string, searchTerm: string };

export const search = async ({ activeTab, searchTerm }: SearchProps) => {
    const headers = await authConfig();

    try {
        const res = await fetch(`${API_BASE_URL}/search/${activeTab}/${searchTerm}`, {
            method: 'GET',
            headers
        })
        const jsonRes = await res.json()

        if (!res.ok) throw new Error(jsonRes.message || 'An error occurred refreshing the page. Please try again later.');

        return jsonRes;

    } catch (error: any) {
        const res = { error: true, message: error.message || 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}

export const getSearchHistory = async () => {
    const headers = await authConfig();

    try {
        const res = await fetch(`${API_BASE_URL}/search/history`, {
            method: 'GET',
            headers
        })
        const jsonRes = await res.json()

        if (!res.ok) throw new Error(jsonRes.message || 'An error occurred refreshing the page. Please try again later.');

        return jsonRes;

    } catch (error: any) {
        const res = { error: true, message: error.message || 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}

export const deleteSearchHistory = async ({ id }: { id: string }) => {
    const headers = await authConfig();

    try {
        const res = await fetch(`${API_BASE_URL}/search/history/${id}`, {
            method: 'DELETE',
            headers
        })
        const jsonRes = await res.json()
        console.log('line 153', jsonRes);

        if (!res.ok) throw new Error(jsonRes.message || 'An error occurred refreshing the page. Please try again later.');

        return jsonRes;

    } catch (error: any) {
        const res = { error: true, message: error.message || 'An error occurred refreshing the page. Please try again later.' };
        return res;
    }
}
