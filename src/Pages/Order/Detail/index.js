import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import DetailContainer from '../../../Containers/Order/Detail'
import { getOrderById, updateOrder, finished } from '../../../Services/Order'
import { getAll } from '../../../Services/User'
import getAllStatusService from '../../../Services/Status'
import {
  getBySerialNumber,
  createSerialNumbers,
  associateSerialNumber,
  getSerialOrderOutputs,
} from '../../../Services/SerialNumber'

const Detail = ({
  match
}) => {
  const [order, setOrder] = useState({
    user: {
      name: ''
    },
    status: {
      color: '',
      value: '',
    },
    customer: {
      name: '',
      document: '',
      phone: '',
      address: {
        street: '',
        streetNumber: '',
        zipcode: '',
        city: '',
        state: '',
        neighborhood: '',
      }
    }
  })
  const [users, setUsers] = useState([])
  const [statusList, setStatusList] = useState([])
  const [serialNumbersOuts, setSerialNumbersOuts] = useState([])

  useEffect(() => {
    getOrder()
    getAllUsers()
    getllStatus()
  }, [])

  const getllStatus = async () => {
    try {
      const { data: { source }} = await getAllStatusService()
      setStatusList(source)
    } catch (error) {

    }
  }

  const getAllUsers = async () => {
    try {
      const { data: { source } } = await getAll({})
      setUsers(source)
    } catch (error) {
      console.log(error)
    }
  }

  const getOrder = async () => {
    try {
      const { data } = await getOrderById(match.params.id)
      setOrder(data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateOrderDetail = async (values) => {
    try {
      const { data } = await updateOrder(match.params.id, values)
      setOrder(data)
    } catch (error) {
      console.log(error)
    }
  }


  const serialNumberExistOrActivated = async (serialNumber) => {
    const response = await getBySerialNumber({ activated: true, serialNumber })
    return response
  }

  const finishedOrder = async () => {
    console.log('mano')
    try {
      const { data } = await finished(match.params.id)
      setOrder(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  const addSerialNumbers = async (values) => {
    const response = await createSerialNumbers({ ...values, orderId: match.params.id })
    getOrder()
    return response
  }
  const addAssociateSerialNumbers = async (values) => {
    await associateSerialNumber({ ...values, orderId: match.params.id })
    getOrder()
    const { data } = await getSerialOrderOutputs({ transactionOutId: match.params.id, limit: 9999 })
    setSerialNumbersOuts(data)
  }

  return (
    <DetailContainer
      order={order}
      users={users}
      statusList={statusList}
      updateOrderDetail={updateOrderDetail}
      finishedOrder={finishedOrder}
      serialNumberExistOrActivated={serialNumberExistOrActivated}
      addSerialNumbers={addSerialNumbers}
      addAssociateSerialNumbers={addAssociateSerialNumbers}
      serialNumbersOuts={serialNumbersOuts}
    />
  )
}

export default withRouter(Detail)
