import axios from 'axios';
import { SWOP_TOKEN } from './config';

/* Creating a new instance of axios with the baseURL and headers set. */
const axiosApi = axios.create({
  withCredentials: true,
  baseURL: 'https://swop.cx/graphql',
  headers: {
    authorization: `ApiKey ${SWOP_TOKEN}`,
  },
});

export default axiosApi;
