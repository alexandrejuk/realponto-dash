import axios from 'axios'

const baseURL = 'http://localhost:3003/api'

let headers = {}

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`
}

const axiosInstance = axios.create({
  baseURL,
  headers,
})

export default axiosInstance
