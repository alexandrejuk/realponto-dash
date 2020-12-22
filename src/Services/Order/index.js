import axios from 'axios'

const baseUrl = 'http://localhost:3003/api'

const getAllOrder = (params = {}) => {
  return axios.get(`${baseUrl}/orders`, { params })
}

const getAllOrderSummary = (params = {}) => {
  return axios.get(`${baseUrl}/orders-summary`, { params })
}

export {
  getAllOrder,
  getAllOrderSummary,
}
