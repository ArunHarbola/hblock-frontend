import axios from "axios";

export default function createApi(url){
    const api = axios.create({
        baseURL: `${url}`
    });

    return api;
}