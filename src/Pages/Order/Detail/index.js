import { set } from 'ramda'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import DetailContainer from '../../../Containers/Order/Detail'
import { getOrderById } from '../../../Services/Order'

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
  useEffect(() => {
    getOrder()
  }, [])

  const getOrder = async () => {
   const { data } = await getOrderById(match.params.id)
   setOrder(data)
   console.log(data)
  }

  return (
    <DetailContainer
      order={order}
    />
  )
}

export default withRouter(Detail)
