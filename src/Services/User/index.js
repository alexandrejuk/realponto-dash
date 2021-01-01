import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'
const token = localStorage.getItem('token')
const headers = { Authorization: `bearer ${token}` }

const getAll = async (params = {}) => {
  console.log('mmano', token)
  return await axios.get(`${baseUrl}/users`, { params, headers })
}

const createUser = async (values) => {
  return await axios.post(`${baseUrl}/users`, values, { headers })
}

const updateUser = async (values) => {
  return await axios.put(`${baseUrl}/users/${values.id}`, values, { headers })
}

const updateUserPassword = async (values) => {
  return await axios.put(`${baseUrl}/users-update-password`, values, { headers })
}

export {
  getAll,
  createUser,
  updateUser,
  updateUserPassword,
}
