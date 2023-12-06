'use server'

import * as auth from "@/auth"
import { redirect } from "next/navigation"


export async function signIn() {
    return auth.signIn('github')
}

export async function signOut() {
    auth.signOut()
    redirect('/auth')
}