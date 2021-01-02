import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'
const token = localStorage.getItem('token')
const headers = { Authorization: `bearer ${token}` }

const getAllOrder = (params = {}) => {
  return axios.get(`${baseUrl}/orders`, { params, headers })
}

const getOrderById = (orderId) => {
  return axios.get(`${baseUrl}/orders/${orderId}`, { headers })
}

const getAllOrderSummary = (params = {}) => {
  return axios.get(`${baseUrl}/orders-summary`, { params, headers })
}

const createOrder = (values) => {
  return axios.post(`${baseUrl}/orders`, values, { headers })
}

const updateOrder =  (orderId, values) => {
  return axios.put(`${baseUrl}/orders/${orderId}`, values, { headers })
}

const finished = (orderId) => {
  return axios.put(`${baseUrl}/orders-finished/${orderId}`, {}, { headers })
}

export {
  createOrder,
  getAllOrder,
  getAllOrderSummary,
  getOrderById,
  updateOrder,
  finished,
}
