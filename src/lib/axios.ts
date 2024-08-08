import axios from 'axios';
import { BASE_API_URL } from '@/config';

export default axios.create({
  baseURL: BASE_API_URL,
  timeout: 900000,
  headers: {
    'Content-Type': 'application/json;utf-8',
  },
});
