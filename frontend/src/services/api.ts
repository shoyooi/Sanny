import axios from 'axios';
import type { Project, Message } from '../types';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const fetchProjects = () =>
  api.get<{ data: Project[] }>('/projects').then(r => r.data.data);

export const sendMessage = (msg: Message) =>
  api.post('/messages', msg).then(r => r.data);
