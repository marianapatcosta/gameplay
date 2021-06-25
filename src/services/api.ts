import axios from 'axios';

const api = axios.create({
  baseURL: 'https://discord.com/api/' /* process.env.BASE_URL */,
});

export { api };
