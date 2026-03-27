import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/resources";

export const getAllResources = async (filters = {}) => {
  const response = await axios.get(API_BASE_URL, { params: filters });
  return response.data;
};

export const createResource = async (resourceData) => {
  const response = await axios.post(API_BASE_URL, resourceData);
  return response.data;
};

export const updateResource = async (id, resourceData) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, resourceData);
  return response.data;
};

export const deleteResource = async (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};