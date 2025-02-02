
import { ApiBackend } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

// Create an Axios instance
export const axiosServer = axios.create({
    baseURL: `${ApiBackend}/api/`, // Replace with your API URL
    withCredentials: true, // Ensure cookies are sent with the request
});


axiosServer.interceptors.request.use(
    async (config: any) => {
        const cookieStore = cookies();
        const token = cookieStore.get("jwt")?.value; // Retrieve JWT token
        try {
            // Set headers
            config.headers['Content-Type'] = 'application/json'; // If you're sending JSO
            config.headers['Authorization'] = 'Bearer ' + token; // If you're sending JSO
        } catch (error) {
            console.error("Error fetching tokens");
            Promise.reject("Error fetching tokens");
        }
        return config;
    },
);
