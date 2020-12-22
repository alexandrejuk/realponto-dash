import React, { useEffect, useState } from 'react'
import ManagerContainer from '../../../Containers/Customer/Manager'
import { getAll } from '../../../Services/Customer'
import { cpf, cnpj } from 'cpf-cnpj-validator'

const Manager = () => {
  const [source, setSource] = useState([])

  useEffect(() => {
    getAllCustomers()
  }, [])

  const getAllCustomers = async () => {
    const { data } = await getAll({})
    setSource(data.source)
  }

  const handlerCustomerFilter = async (value) => {
    let query = {
      name: value,
    }

    const valueWithReplace = value
      .replace(/\./g,'')
      .replace(/\-/g, '')
      .replace(/\//g, '')

      if(cnpj.isValid(valueWithReplace) || cpf.isValid(valueWithReplace)) {
        query = {
          document: valueWithReplace
        }
      }

      const { data } = await getAll(query)
      setSource(data.source)
  }

  return (
    <ManagerContainer source={source} handlerCustomerFilter={handlerCustomerFilter} />
  )
}

export default Manager
