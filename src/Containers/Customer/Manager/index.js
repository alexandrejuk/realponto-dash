import React from 'react'
import { Button, Card, Input, Row, Col } from 'antd'
import CustomerList from './CustomerList'
import { SearchOutlined } from '@ant-design/icons'


const datasource = [
  {
    name: 'Caio Vinicius',
    document: '1234567890'
  },
  {
    name: 'Allan Teixeira Lima',
    document: '1234567891'
  },
  {
    name: 'Alexandre Soares',
    document: '123456789'
  },
]

const Manager = () => {

  return (
   <Row gutter={[8, 8]}>
     <Col span={24}>
      <Card bordered={false}>
        <Row gutter={[8, 8]}>
          <Col span={19}>
            <Input placeholder="Filtre por nome ou documento." prefix={<SearchOutlined />} />
          </Col>
          <Col span={5} style={{ textAlign: 'right' }}>
            <Button style={{ marginRight: '16px' }}>Limpar Filtros</Button>
            <Button type="primary">Filtrar</Button>
          </Col>
        </Row>
      </Card>
    </Col>
    <Col span={24}>
      <Card bordered={false}>
        <CustomerList datasource={datasource} />
      </Card>
    </Col>
   </Row>
  )
}

export default Manager
