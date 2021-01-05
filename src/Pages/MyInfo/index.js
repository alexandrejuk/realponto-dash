import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'ramda'

import { updateMyInfo as updateMyInfoService } from '../../Services/User'
import MyInfoContainer from '../../Containers/MyInfo'

const MyInfo = ({
  user,
}) => {
  const updateMyInfo = async (values) => {
    try {
      await updateMyInfoService(user.id, values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MyInfoContainer
      user={user}
      updateMyInfo={updateMyInfo}
    />
  )
}

const mapStateToProps = ({ user }) => ({
  user,
})

const enhanced = compose(
  connect(mapStateToProps),
)

export default enhanced(MyInfo)

