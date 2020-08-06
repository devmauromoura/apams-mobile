import api from '../../../services/api';

const endpoints = {
    posts: '/posts/show',
    post: '/posts/show/id',
    like: (id) => `/posts/${id}/like`,
    unlike: (id) => `/posts/${id}/unlike`,
    comments: (id) => `/posts/${id}/comments`,
    message: (id) => `/posts/${id}/comments/message`,
    token: '/user/profile'
}

export const requestPosts = async (token) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.posts, { headers });
    return response;
}

export const requestVerifyToken = async (token) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.token, { headers });
    return response;
}

export const requestLikePost = async (token, id) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.like(id), { headers });
    return response;
}

export const requestUnlikePost = async (token, id) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.unlike(id), { headers });
    return response;
}

export const requestComments = async (token, id) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await request.get(endpoints.comments(id), { headers });
    return response;
}

export const sendComment = async (token, data) => {
    const request = await api;
    const headers = { Authorization: `Bearer ${token}` };
    const body = { message: data.message };
    const response = await request.post(endpoints.message(data.id), body, { headers });
    return response;
}