'use server'

import { redirect } from "next/navigation"
import { logOutUser } from "./company"
import { cookies } from "next/headers";




export async function signOut() {
    await logOutUser()

    // Clear the JWT cookie on the Next.js side (optional)
    cookies().delete("jwt");

    // Redirect user to login page after logout
    redirect("/auth");
}

export async function Okta() {

}

