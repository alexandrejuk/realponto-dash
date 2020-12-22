import React, { useEffect, useState } from 'react'
import ManagerContainer from '../../../Containers/Product/Manager'
import {
  createProduct,
  getAll,
  updateProduct,
} from '../../../Services/Product'

const Manager = () => {
  const [products, setProducts] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    getAllProducts()
  }, [])


  const getAllProducts = async () => {
    try {
      const { data } = await getAll({})
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (values) => {
    try {
      await createProduct(values)
      getAllProducts()
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleSubmitUpdate = async (values) => {
    try {
      await updateProduct(values)
      getAllProducts()
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleGetProductsByFilters = async(values) => {
    const { name, activated } = values
    const checkedActivated = (
      activated && activated.length < 2 && activated.length !== 0
       ? { activated:  activated[0] === 'Inativo' ? false : true }
       : {}
    )

    const buildQuerySpec = {
      ...checkedActivated,
      name,
      page,
      limit: 25
    }

    const { data } = await getAll(buildQuerySpec)
    setProducts(data)
  }

  return (
    <ManagerContainer
      products={products}
      handleSubmit={handleSubmit}
      handleSubmitUpdate={handleSubmitUpdate}
      handleGetProductsByFilters={handleGetProductsByFilters}
    />
  )
}

export default Manager
