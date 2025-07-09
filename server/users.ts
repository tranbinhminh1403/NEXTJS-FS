"use server"

import { auth } from "@/auth/auth";

export const signIn = async ( email: string, password: string ) => {
    await auth.api.signInEmail({
        body: {
            email,
            password,
        }
    })
}

export const signUp = async ( email: string, password: string, name: string ) => {
    await auth.api.signUpEmail({
        body: {
            email,
            password,
            name,
        }
    })
}