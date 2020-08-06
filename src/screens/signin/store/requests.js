import api from '../../../services/api';

const endpoints = {
  "login": "/login",
};

export const requestLogin = async (data) => {
  const request = await api;
  const response = await request.post(endpoints.login, data, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8', } });
  return response;
}