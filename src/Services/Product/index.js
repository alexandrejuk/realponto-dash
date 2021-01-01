import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'
const token = localStorage.getItem('token')
const headers = { Authorization: `bearer ${token}` }

const getAll = async (params = {}) => {
  console.log('mmano')
  return await axios.get(`${baseUrl}/products`, { params, headers })
}

const createProduct = async (values) => {
  return await axios.post(`${baseUrl}/products`, values, { headers })
}

const updateProduct = async (values) => {
  return await axios.put(`${baseUrl}/products/${values.id}`, values, { headers })
}

export {
  getAll,
  createProduct,
  updateProduct,
}
