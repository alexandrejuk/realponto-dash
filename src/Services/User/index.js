import axiosIntance from '../../utils/axiosInstance'

const getAll = async (params = {}) => {
  return await axiosIntance.get('/users', { params })
}

const createUser = async (values) => {
  return await axiosIntance.post('/users', values)
}

const updateUser = async (values) => {
  return await axiosIntance.put(`/users/${values.id}`, values)
}

const updateUserPassword = async (values) => {
  return await axiosIntance.put(`/users-update-password`, values)
}

export {
  getAll,
  createUser,
  updateUser,
  updateUserPassword,
}
