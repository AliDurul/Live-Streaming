import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        facebook({
            clientId: process.env.AUTH_FACEBOOK_ID,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET,
        })
        
    ],
    callbacks: {

    },
    pages: { signIn: '/auth' },
    secret: process.env.AUTH_SECRET,
    session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
})