import api from '../../../services/api';

const endpoints = {
    animals: (query) => `/animals/show?${query ? query : ''}`,
    gallery: (id) => `/animals/${id}/gallery`,
    adopt: (id) => `animals/${id}/adopt`
}

export const requestAnimals = async (token, query) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.animals(query), { headers });
    return response;
}

export const requestGallery = async (token, id) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.gallery(id), { headers });
    return response;
}

export const requestAdopt = async (token, id) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.adopt(id), { headers });
    return response;
}
