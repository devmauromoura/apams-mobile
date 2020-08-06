import api from '../../../services/api';

const endpoints = {
    about: '/about',
    sponsors: '/about/sponsors',
}

export const requestAbout = async (token) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.about, { headers });
    return response;
}

export const requestSponsor = async (token) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.sponsors, { headers });
    return response;
}