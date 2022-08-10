import axios from 'axios';

const request = axios.create({
    baseUrl: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);

    return response.data;
};

export default request;
