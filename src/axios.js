import axios from 'axios';

axios.defaults.baseURL = 'https://gorest.co.in/public/v2/';
export default () => {
  return axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
  });
};

const clientToken =
  '49cfbc9f3d1b7487340e53b685ebdb6f490089ad8efce4b79e9d79509f2c2301';

axios.defaults.headers.common = { Authorization: `bearer ${clientToken}` };
