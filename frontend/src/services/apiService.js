import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiService = {
  // Auth endpoints
  login: (email, password) => 
    axios.post(`${API_BASE_URL}/auth/login`, { email, password }),
  
  register: (userData) => 
    axios.post(`${API_BASE_URL}/auth/register`, userData),
  
  logout: () => 
    axios.post(`${API_BASE_URL}/auth/logout`),

  // Course endpoints
  getCourses: () => 
    axios.get(`${API_BASE_URL}/courses`),
  
  getCourseById: (id) => 
    axios.get(`${API_BASE_URL}/courses/${id}`),
  
  createCourse: (courseData) => 
    axios.post(`${API_BASE_URL}/courses`, courseData),
  
  updateCourse: (id, courseData) => 
    axios.put(`${API_BASE_URL}/courses/${id}`, courseData),
  
  deleteCourse: (id) => 
    axios.delete(`${API_BASE_URL}/courses/${id}`),
  
  enrollInCourse: (courseId) => 
    axios.post(`${API_BASE_URL}/courses/${courseId}/enroll`),

  // User endpoints
  getUsers: () => 
    axios.get(`${API_BASE_URL}/users`),
  
  getUserById: (id) => 
    axios.get(`${API_BASE_URL}/users/${id}`),
  
  updateUser: (id, userData) => 
    axios.put(`${API_BASE_URL}/users/${id}`, userData),
  
  deleteUser: (id) => 
    axios.delete(`${API_BASE_URL}/users/${id}`)
};

export default apiService;
