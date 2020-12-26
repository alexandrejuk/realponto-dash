import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'

const getAll = async (params = {}) => {
  return await axios.get(`${baseUrl}/users`, { params })
}

const createUser = async (values) => {
  return await axios.post(`${baseUrl}/users`, values)
}

const updateUser = async (values) => {
  return await axios.put(`${baseUrl}/users/${values.id}`, values)
}

export {
  getAll,
  createUser,
  updateUser,
}
