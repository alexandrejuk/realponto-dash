import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'

const getAll = async (params = {}) => {
  return await axios.get(`${baseUrl}/status`, { params })
}


export default getAll
