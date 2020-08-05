import axios from 'axios';
import config from './config';

axios.defaults.baseURL = config.baseURL;

const setToken = () => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    axios.defaults.headers.common.authorization = token;
  }
};

const get = async (url) => {
  setToken();
  return axios.get(url).catch((e) => e.response);
};

const post = async (url, data) => {
  setToken();
  return axios.post(url, data).catch((e) => e.response);
};

export { get, post };
