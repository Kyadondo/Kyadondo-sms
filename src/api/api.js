import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/', // Adjust the baseURL to match your backend URL
});

export const fetchAllStudents = () => api.get('api/v1/students/getall');
export const getClasses = () => api.get('/api/v1/classes/getall');


//Counts Api Calls

export const countStudents = () => api.get('/api/v1/students/count');
export const countTeachers = () => api.get('/api/v1/teachers/count');
export const countClasses = () => api.get('/api/v1/classes/count');


export default api;
