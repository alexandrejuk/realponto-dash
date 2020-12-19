import React, { useState, useEffect } from 'react'
import axios from 'axios'

import buildOrderSpec from './orderSpec'
import AddContainer from '../../../Containers/Order/Add'

const baseUrl = 'http://localhost:3003/api'

const Add = () => {
  const [userList, setUserList] = useState([])
  const [customerList, setCustomerList] = useState([])
  const [productList, setProductList] = useState([])
  const [key, setKey] = useState(0)

  useEffect(() => {
    getAllUser()
    getAllCustomer()
    getAllProduct()
  }, [])


  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/products`)
      setProductList(data)
    } catch (error) {

    }
  }

  const getAllUser = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/users`)
      setUserList(data)
    } catch (error) {

    }
  }

  const getAllCustomer = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/customers`)
      setCustomerList(data)
    } catch (error) {

    }
  }

  const goToManagerOrder = () => {
    console.log('manager order')
  }

  const handleSubmit = async values => {
    try {
      await axios.post(`${baseUrl}/orders`, buildOrderSpec(values))
      setKey(key + 1)
    } catch (error) {

    }
  }

  return (
    <AddContainer
      key={key}
      customerList={customerList}
      userList={userList}
      productList={productList}
      goToManagerOrder={goToManagerOrder}
      handleSubmit={handleSubmit}
    />
  )
}

export default Add
