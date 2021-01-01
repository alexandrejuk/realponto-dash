import { set } from 'ramda'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import DetailContainer from '../../../Containers/Order/Detail'
import { getOrderById, updateOrder, finished } from '../../../Services/Order'
import { getAll } from '../../../Services/User'
import getAllStatusService from '../../../Services/Status'

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

  const addSerialNumber = async (values) => {
    console.log(values)
    // try {
    //   const { data } = await updateOrder(match.params.id, values)
    //   setOrder(data)
    // } catch (error) {
    //   console.log(error)
    // }
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

  return (
    <DetailContainer
      order={order}
      users={users}
      statusList={statusList}
      updateOrderDetail={updateOrderDetail}
      addSerialNumber={addSerialNumber}
      finishedOrder={finishedOrder}
    />
  )
}

export default withRouter(Detail)
