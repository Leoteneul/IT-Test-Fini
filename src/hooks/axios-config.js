import axios from 'axios'


export const client = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
})