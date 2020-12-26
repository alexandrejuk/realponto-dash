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

export {
  getAllOrder,
  getAllOrderSummary,
  getOrderById,
}
