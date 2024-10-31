import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'https://foodorder-cy1j.onrender.com' : '/';
