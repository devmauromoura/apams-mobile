import api from '../../../services/api';

const endpoints = {
    recovery: '/recoverypassword',
}

export const recoveryPassword = async (email) => {
    const request = await api;
    const body = {
        email: email
    }
    const response = await request.post(endpoints.recovery, body);
    return response;
}
