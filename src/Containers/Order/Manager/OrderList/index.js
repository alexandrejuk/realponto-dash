import React from 'react'
import { Button, Table, Tag } from 'antd'

import {
  translateStatus,
  statusColors,
  parseStatusToType,
} from '../../../../utils/orderStatus'
import formattedDate from '../../../../utils/parserDate'

const columns = goToOrderDetail => ([
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    fixed: 'left',
    render: (text) => (
      <Tag color={statusColors[text]}>{translateStatus[text]}</Tag>
    )
  },
  {
    title: 'Tipo de ordem',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    render: (_, record) => parseStatusToType[record.status]
  },
  {
    title: 'Data da ordem',
    dataIndex: 'createdAt',
    key: 'createdAt',
    fixed: 'left',
    render: (text) => formattedDate(text, 'DD/MM/YY - HH:mm')
  },
  {
    title: 'Funcionário',
    dataIndex: 'user.name',
    key: 'user.name',
    fixed: 'left',
    render: (_, record) => record.user.name
  },
  {
    title: 'Revisar?',
    dataIndex: 'pending_review',
    fixed: 'left',
    render: (text) => text ? 'Sim' : 'Não'
  },
  {
    title: '',
    dataIndex: 'operation',
    key: 'id',
    fixed: 'right',
    render: (_, record) => (
      <Button
        onClick={() => goToOrderDetail(record.id)}
      >
        Ver detalhes
      </Button>
    ),
  },
])

const OrderList = ({
  datasource,
  goToOrderDetail,
}) => {
  return (
    <Table
      columns={columns(goToOrderDetail)}
      dataSource={datasource}
    />
  )
}

export default OrderList
