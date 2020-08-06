import api from '../../../services/api';

const endpoints = {
    "register": "/register",
};

export const requestRegister = async (data) => {
    const request = await api;
    try {
        const response = await request.post(endpoints.register, data);
        return response;
    } catch (error) {
        return error;
    }
}