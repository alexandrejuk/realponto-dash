import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AddContainer from '../../../Containers/Order/Add'

const baseUrl = 'http://localhost:3003/api'

const Add = () => {
  const [userList, setUserList] = useState([])
  const [customerList, setCustomerList] = useState([])
  const [productList, setProductList] = useState([])

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

  return (
    <AddContainer
      customerList={customerList}
      userList={userList}
      productList={productList}
      goToManagerOrder={goToManagerOrder}
    />
  )
}

export default Add
