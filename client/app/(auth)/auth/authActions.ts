"use server"

import { signIn } from '@/auth'

import { AuthError } from 'next-auth'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


interface LoginType {
    email: string;
    password: string;
}

interface RegisterType extends LoginType {
    name: string
}

export const login = async (loginData: LoginType) => {
    const { email, password } = loginData
    try {
        await signIn('credentials', {
            email,
            password,
            redirect: false
        })
        return { success: true }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials' }
                case 'CallbackRouteError':
                    const errorMessage = error?.cause?.err?.message;
                    return { error: errorMessage };
                default:
                    return { error: "Something went wrong" }
            }
        }
        throw error
    }
}

export const register = async (registerData: RegisterType) => {

    try {
        const resAPI = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData),
        })

        const data = await resAPI.json()

        if (!resAPI.ok) {
            throw new Error(data.message || "Something went wrong, Please try again!");
        }

        await signIn('credentials', {
            email: registerData.email,
            password: registerData.password,
            redirect: false
        })


    } catch (error: any) {

        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials' }
                case 'CallbackRouteError':
                    const errorMessage = error?.cause?.err?.message;
                    return { error: errorMessage };
                default:
                    return { error: "Something went wrong" }
            }
        } else {
            return { error: error.message || "Something went wrong" }
        }
    }

}