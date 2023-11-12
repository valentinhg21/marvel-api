
import Axios from 'axios'
import md5 from 'md5'
export const getAPI = async (filter, limit, state) => {
    const publicKey = '28b25cd453bef5637643af32f418e2bc';
    const privateKey = 'ef5fbe2c0b0c4ec813efc74c20da78ffcdfa3d44'
    const ts = '1';
    const hash = md5(`${ts}${privateKey}${publicKey}`);
    const AUTH_API = `ts=1&apikey=${publicKey}&hash=${hash}`;
    const BASE_URL = `https://gateway.marvel.com:443/v1/public`;
    
    try {
        if(filter[0] === 'characters'){
            let idAPI = filter[1] ? `/${filter[1]}` : ''
            let limitAPI = limit ? `&limit=${limit}` : ''
           
            const response = await Axios.get(`${BASE_URL}/${filter[0]}${idAPI}?${AUTH_API}${limitAPI}`);
            state([
                ...
                response.data.data.results
            ])
        }
        if(filter[0] === 'series'){
            let idAPI = filter[1] ? `/${filter[1]}` : ''
            let limitAPI = limit ? `&limit=${limit}` : ''
            const response = await Axios.get(`${BASE_URL}/${filter[0]}${idAPI}?${AUTH_API}${limitAPI}`);
            state([
                ...
                response.data.data.results
            ])
        }
        if(filter[0] === 'comics'){
            let idAPI = filter[1] ? `/${filter[1]}` : ''
            let limitAPI = limit ? `&limit=${limit}` : ''
            const response = await Axios.get(`${BASE_URL}/${filter[0]}${idAPI}?${AUTH_API}${limitAPI}`);
            state([
                ...
                response.data.data.results
            ])
        }

    } catch (error) {
        console.error(error)
    }


}