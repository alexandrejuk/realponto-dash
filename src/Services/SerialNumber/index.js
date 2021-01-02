import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'
const token = localStorage.getItem('token')
const headers = { Authorization: `bearer ${token}` }

const getBySerialNumber = async (params = {}) => {
  return await axios.get(`${baseUrl}/serials`, { params, headers })
}

const createSerialNumbers = async (values = {}) => {
  return await axios.post(`${baseUrl}/serials`, values, { headers })
}

const associateSerialNumber = async (values = {}) => {
  return await axios.put(`${baseUrl}/serials-associate`, values, { headers })
}

const getSerialOrderOutputs = async (params = {}) => {
  return await axios.get(`${baseUrl}/serials`, { params, headers })
}


export {
  getBySerialNumber,
  createSerialNumbers,
  associateSerialNumber,
  getSerialOrderOutputs
}
