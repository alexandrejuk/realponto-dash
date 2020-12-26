import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginContainer from '../../Containers/Login'
import Auth from '../../Services/Auth'

const Login = ({
  history
}) => {
  const authentication = async (values) => {
    try {
      const { data } = await Auth(values)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user.name', data.name)
      if(localStorage.getItem('token')) {
        history.push('/logged/order/manager')
      }
    } catch (error) {
      localStorage.removeItem('token')
      localStorage.removeItem('user.name')
    }
  }

  return (
    <LoginContainer authentication={authentication} />
  )
}

export default withRouter(Login)
