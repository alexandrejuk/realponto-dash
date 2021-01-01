import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'
const token = localStorage.getItem('token')
const headers = { Authorization: `bearer ${token}` }

const getAll = async (params = {}) => {
  console.log('mmano')
  return await axios.get(`${baseUrl}/customers`, { params, headers })
}

const createCustomer = async (values) => {
  return await axios.post(`${baseUrl}/customers`, values, { headers })
}

const updateCustomer = async (values) => {
  return await axios.put(`${baseUrl}/customers/${values.id}`, values, { headers })
}

export {
  getAll,
  createCustomer,
  updateCustomer,
}
