import axios from 'axios';

// Ensure this points to your correct backend URL (v1 is important if you added versioning)
const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

// Automatically add the token to every request if it exists
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
  }
  return req;
});

// Auth Services
export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);

// Task Services (These were missing!)
export const fetchTasks = () => API.get('/tasks');
export const createTask = (taskData) => API.post('/tasks', taskData);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);