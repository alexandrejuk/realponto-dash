import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'

const getAll = async (params = {}) => {
  return await axios.get(`${baseUrl}/customers`, { params })
}

const createCustomer = async (values) => {
  return await axios.post(`${baseUrl}/customers`, values)
}

const updateCustomer = async (values) => {
  return await axios.put(`${baseUrl}/customers/${values.id}`, values)
}

export {
  getAll,
  createCustomer,
  updateCustomer,
}
