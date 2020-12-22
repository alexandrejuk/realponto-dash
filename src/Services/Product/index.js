import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'

const getAll = async (params = {}) => {
  return await axios.get(`${baseUrl}/products`, { params })
}

const createProduct = async (values) => {
  return await axios.post(`${baseUrl}/products`, values)
}

const updateProduct = async (values) => {
  return await axios.put(`${baseUrl}/products/${values.id}`, values)
}

export {
  getAll,
  createProduct,
  updateProduct,
}
