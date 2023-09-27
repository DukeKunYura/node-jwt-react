import axios from "axios";
import { IAuthResponse } from "../interfaces/interfaces";
const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;



const instance = axios.create({
    baseURL: `http://${host}:${port}/api`,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

export const login = async (email: string, password: string) => {
    try {
        return await instance.post<IAuthResponse>("/login", { email, password });
    } catch (error) {
        console.log(error)
    }

}

export const registration = async (email: string, password: string) => {
    try {
        console.log(email + " " + password);
        return await instance.post<IAuthResponse>("/registration", { email, password })
            .then(res => console.log(res.data));
    } catch (error) {

    }

}

export const logout = async () => {
    try {
        console.log('logout');
        return await instance.post<IAuthResponse>("/logout")
    } catch (error) {
        console.log(error)
    }

}