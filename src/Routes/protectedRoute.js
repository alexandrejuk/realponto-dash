import { prop } from 'ramda'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const isAuthenticated = localStorage.getItem('token')
  return (
    isAuthenticated
      ? <Route {...props} />
      : <Redirect to={{ pathname: '/login' }} />
  )
}

export default ProtectedRoute