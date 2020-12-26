import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'
const token = localStorage.getItem('token')
const headers = { Authorization: `bearer ${token}` }

const getAll = async (params = {}) => {
  return await axios.get(`${baseUrl}/status`, { params, headers })
}


export default getAll
