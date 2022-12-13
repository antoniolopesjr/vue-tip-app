import axios from 'axios';
import { SWOP_TOKEN } from './config';

const axiosApi = axios.create({
  withCredentials: true,
  baseURL: 'https://swop.cx/graphql',
  headers: {
    authorization: `ApiKey ${SWOP_TOKEN}`,
  },
});

export default axiosApi;
