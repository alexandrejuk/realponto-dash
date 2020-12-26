import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'
const token = localStorage.getItem('token')
const headers = { Authorization: `bearer ${token}` }

const getAll = async (params = {}) => {
  return await axios.get(`${baseUrl}/users`, { params, headers })
}

const createUser = async (values) => {
  return await axios.post(`${baseUrl}/users`, values, { headers })
}

const updateUser = async (values) => {
  return await axios.put(`${baseUrl}/users/${values.id}`, values,{ headers })
}

export {
  getAll,
  createUser,
  updateUser,
}
