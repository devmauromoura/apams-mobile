import api from '../../../services/api';

const endpoints = {
  "user": "/user/profile",
  "update_user": "/user/update",
  "logout": "/user/logout"
};

export const requestDataUser = async (token) => {
  const request = await api;
  const response = await request.get(endpoints.user, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response;
}

export const requestLogout = async (token) => {
  const request = await api;
  const response = await request.get(endpoints.logout, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response;
}

export const updateDataUser = async (token, data) => {
  const request = await api;
  const response = await request.post(endpoints.update_user, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response;
}