import React from 'react'
import { Card } from 'antd'
import CustomerList from './CustomerList'

const Manager = () => {
  return (
    <Card bordered={false}>
      <CustomerList />
    </Card>
  )
}

export default Manager
