import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

let http = axios.create({
    baseURL: API_BASE_URL || 'http://localhost:8080'
});

export const useAccessToken = (accessToken) => {
    http = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8080',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
};  

export const get = async(path, params) => {
    const { data } = await http.get(path, { params });
    return data;
}

export default {
    
}
