// src/services/studentService.js
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1/students'; // Replace with your backend URL

export const createStudent = async (studentData) => {
  const response = await axios.post(`${API_URL}/`, studentData);
  return response.data;
};

export const getAllStudents = async () => {
  const response = await axios.get(`${API_URL}/getall`);
  return response.data;
};

export const updateStudent = async (id, studentData) => {
  const response = await axios.put(`${API_URL}/${id}`, studentData);
  return response.data;
};
