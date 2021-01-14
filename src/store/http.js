import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;
const LOGIN_API_BASE_URL = process.env.VUE_APP_LOGIN_API_BASE_URL;

let http = axios.create({
    baseURL: API_BASE_URL || 'http://localhost:8003'
    , headers: {
        'Content-type' : 'application/json'
    }
});

export const newAxios = () => {
    http = axios.create({
        baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8003'
        , headers: {
            'Content-type' : 'application/json'
        }
    })
}

export const useAccessToken = (accessToken) => {
    http = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8003'
      , headers: {
        'Content-type' : 'application/json'
        , authorization: `Bearer ${accessToken}`
      },
    });
};

export const get = async(path, params) => {
    const { data } = await http.get(path, { params });
    return data;
}

export const post = async(path, params) => {
    const { data } = await http.post(path, params);
    return data;
}

export const loginPost = async(path, payload) => {
    const url = `${LOGIN_API_BASE_URL || 'http://localhost:8001'}${path}`;
    const { data } = await axios.post(url, payload);
    return data;
}

export default {
    
}
