import { values } from 'ramda'
import React from 'react'
import UpdateMyPasswordContainer from '../../Containers/UpdateMyPassword'
import { updateUserPassword as updateUserPasswordService } from '../../Services/User'

const UpdateMyPassword = () => {

  const handleSubmit = async (values) => {
    try {
      await updateUserPasswordService(values)
    } catch (error) {

    }
  }
  return (
    <UpdateMyPasswordContainer
      handleSubmit={handleSubmit}
    />
  )
}

export default UpdateMyPassword
