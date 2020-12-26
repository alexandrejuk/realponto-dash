import React, { useEffect, useState } from 'react'
import ManagerContainer from '../../Containers/MyTeam/Manager'
import {
  createUser,
  getAll,
  updateUser,
} from '../../Services/User'

const Manager = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getAllUsers()
  }, [])


  const getAllUsers = async () => {
    try {
      const { data: { source } } = await getAll({})
      setUsers(source)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (values) => {
    try {
      await createUser(values)
      getAllUsers()
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleSubmitUpdate = async (values) => {
    try {
      await updateUser(values)
      getAllUsers()
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleGetUsersByFilters = async(values) => {
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
    setUsers(data)
  }

  return (
    <ManagerContainer
      users={users}
      handleSubmit={handleSubmit}
      handleSubmitUpdate={handleSubmitUpdate}
      handleGetUsersByFilters={handleGetUsersByFilters}
    />
  )
}

export default Manager
