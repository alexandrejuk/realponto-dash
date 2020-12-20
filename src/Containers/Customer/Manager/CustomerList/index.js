import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Nome/Razão Social',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },

  {
    title: 'Cpf/Cnpj',
    dataIndex: 'document',
    key: 'document',
    fixed: 'left',
  },
]

const CustomerList = ({
  datasource,
}) => {
  return (
    <Table
      columns={columns}
      dataSource={datasource}
    />
  )
}

export default CustomerList
