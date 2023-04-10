import axios from "axios";
import fetch from 'node-fetch';

export const getHeroById = async (heroId) => {
    try {

        const res = await fetch(`https://www.superheroapi.com/api.php/1315557335533076/${heroId}`)

        return await res.json()

    } catch (error) {
        Promise.reject(error)
    }
}

export const heroApi = axios.create({
    baseURL: 'https://superheroapi.com/api/1315557335533076',
    withCredentials: false,
})


