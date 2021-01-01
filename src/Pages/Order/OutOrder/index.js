import React, { useState, useEffect } from 'react'

import buildOrderSpec from './orderSpec'
import OutOrderContainer from '../../../Containers/Order/OutOrder'
import { getAll as getAllUserService } from '../../../Services/User'
import { getAll as getAllProductService } from '../../../Services/Product'
import { getAll as getAllCustomerService } from '../../../Services/Customer'
import getAllStatusService from '../../../Services/Status'
import { createOrder } from '../../../Services/Order'
import { withRouter } from 'react-router-dom'

const OutOrder = ({
  history,
}) => {
  const [userList, setUserList] = useState([])
  const [customerList, setCustomerList] = useState([])
  const [productList, setProductList] = useState([])
  const [key, setKey] = useState(0)
  const [statusList, setStatusList] = useState([])
  useEffect(() => {
    getAllUser()
    getAllCustomer()
    getAllProduct()
    getllStatus()
  }, [])


  const getAllProduct = async () => {
    try {
      const { data: { source }} = await getAllProductService({ activated: true })
      setProductList(source)
    } catch (error) {

    }
  }

  const getAllUser = async () => {
    try {
      const { data: { source }} = await getAllUserService({ activated: true })
      setUserList(source)
    } catch (error) {

    }
  }

  const getAllCustomer = async () => {
    try {
      const { data: { source }} = await getAllCustomerService()
      setCustomerList(source)
    } catch (error) {

    }
  }

  const getllStatus = async () => {
    try {
      const { data: { source }} = await getAllStatusService({ type: 'outputs' })
      setStatusList(source)
    } catch (error) {

    }
  }

  const goToManagerOrder = () => {
    console.log('manager order')
  }

  const handleSubmit = async values => {
    try {
      await createOrder(buildOrderSpec(values))
      setKey(key + 1)
    } catch (error) {

    }
  }

  const goToOrder = () => history.push('/logged/order/manager')

  return (
    <OutOrderContainer
      key={key}
      customerList={customerList}
      userList={userList}
      productList={productList}
      statusList={statusList}
      goToManagerOrder={goToManagerOrder}
      handleSubmit={handleSubmit}
      goToOrder={goToOrder}
    />
  )
}

export default withRouter(OutOrder)
