import axios from 'axios';

const API_ENDPOINT = 'http://localhost:5000';

const fetchUsers = () => axios.get(`${API_ENDPOINT}/users`);
const fetchReports = () => axios.get(`${API_ENDPOINT}/reports`);

// Function to create a report
const createReport = (reportData) => axios.post(`${API_ENDPOINT}/reports`, reportData);

// Function to update a report
const updateReport = (reportData) => axios.put(`${API_ENDPOINT}/reports/${reportData.id}`, reportData)


// Function to delete a report
const deleteReport = (reportId) => axios.delete(`${API_ENDPOINT}/reports/${reportId}`);

// eslint-disable-next-line
export default {
  fetchUsers,
  fetchReports,
  createReport,
  updateReport,
  deleteReport,
};
