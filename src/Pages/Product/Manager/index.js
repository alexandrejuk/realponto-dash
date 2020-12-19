import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ManagerContainer from '../../../Containers/Product/Manager'

const baseUrl = 'http://localhost:3003/api'

const Manager = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])


  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/products`)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (values) => {
    try {
      await axios.post(`${baseUrl}/products`, values)
      getAllProducts()
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleSubmitUpdate = async (values) => {
    try {
      await axios.put(`${baseUrl}/products/${values.id}`, values)
      getAllProducts()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <ManagerContainer
      products={products}
      handleSubmit={handleSubmit}
      handleSubmitUpdate={handleSubmitUpdate}
    />
  )
}

export default Manager
