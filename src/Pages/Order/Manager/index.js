import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import ManagerContainer from '../../../Containers/Order/Manager'

const baseUrl = 'http://localhost:3003/api'


const Manager = ({
  history,
}) => {
  const [datasource, setDatasource] = useState([])

  useEffect(() => {
    getAllOrder()
  }, [])


  const getAllOrder = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/orders`)
      setDatasource(data)
    } catch (error) {

    }
  }

  const goToAddOrder = () => history.push('/order/add')
  const goToOrderDetail = (id) => history.push(`/order/detail/${id}`)

  return (
    <ManagerContainer
      datasource={datasource}
      goToAddOrder={goToAddOrder}
      goToOrderDetail={goToOrderDetail}
    />
  )
}

export default withRouter(Manager)
