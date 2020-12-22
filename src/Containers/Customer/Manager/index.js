import React, { useState } from 'react'
import { Button, Card, Input, Row, Col } from 'antd'
import CustomerList from './CustomerList'
import { SearchOutlined } from '@ant-design/icons'

const Manager = ({
  source,
  handlerCustomerFilter,
}) => {
  const [search, setSearch] = useState('')
  const onChangeSearch = ({ target }) => {
    setSearch(target.value)
  }

  const clearFilters = () => {
    setSearch('')
    handlerCustomerFilter('')
  }

  const handleFilter = () => {
    handlerCustomerFilter(search)
  }

  return (
   <Row gutter={[8, 8]}>
     <Col span={24}>
      <Card bordered={false}>
        <Row gutter={[8, 8]}>
          <Col span={20}>
            <Input
              placeholder="Filtre por nome ou documento."
              prefix={<SearchOutlined />}
              value={search}
              onChange={onChangeSearch}
            />
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            <Button
              style={{ marginRight: '16px' }}
              onClick={clearFilters}
            >
              Limpar Filtros
            </Button>
            <Button type="primary" onClick={handleFilter}>
              Filtrar
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
    <Col span={24}>
      <Card bordered={false}>
        <CustomerList datasource={source} />
      </Card>
    </Col>
   </Row>
  )
}

export default Manager
