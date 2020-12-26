import React, { useState } from 'react'
import { Card, Typography, Row, Col, Tag, Steps, Table, Button } from 'antd'
import formattedDate from '../../../utils/parserDate'

import {
  translateStatus,
  statusColors,
} from '../../../utils/orderStatus'

const { Step } = Steps
const { Title } = Typography

const orderDetail = {
  "id": "4aad5b4e-35c2-45f1-8cbf-5a0ff5ba2ffa",
  "status": "sale",
  "pending_review": true,
  "createdAt": "2020-12-18T17:09:53.030Z",
  "updatedAt": "2020-12-18T17:09:53.030Z",
  "customerId": null,
  "userId": "f01e39d3-faf5-4342-8dcf-d8e90bdf1cc8",
  "transactions": [
    {
      "status": "pending_analysis",
      "type": "inputs",
      "quantity": 1,
      "productId": "02c43f51-d86b-4545-9322-0020f01b7efb",
      "id": "b4d9f111-70d8-42c4-977e-485541e948f1",
      "product": {
        "activated": true,
        "name": "Airpods apple com estojo de recarga"
      }
    }
  ],
  "user": {
    "activated": true,
    "name": "Alexandre Soares"
  },
  "serialNumbers": []
}

const columns = (detail) => (
  [
    {
      title: 'Status',
      dataIndex: 'status.value',
      render: (text, record) => (
        <Tag color={record.status.color}>{record.status.value}</Tag>
      )
    },
    {
      title: 'Descrição',
      dataIndex: 'productName',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
    },
    {
      title: '',
      dataIndex: 'productId',
      key: 'action',
      render: (text, record) => (
        <Button
          onClick={() => detail(text)}
          type="link"
          primary
        >
          Detalhes
        </Button>
      ),
    },
  ]
)

const Detail = ({
  order,
}) => {
  const [productMovimentation, setProductMovimentation] = useState([])

  const handleProductMovimentation = (productId) => {
    const movimentation = order.transactions.filter(product => product.productId === productId)
    setProductMovimentation(movimentation)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Usuário</p>
              <Title level={5}>{order.user.name}</Title>
            </Col>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Status</p>
              <Title level={5}>
                <Tag color={order.status.color}>{order.status.value}</Tag>
              </Title>
            </Col>
            <Col span={6}>
            </Col>
            <Col span={6} style={{ textAlign: "right" }}>
              <p style={{ marginBottom: '4px' }}>
                Data de criação: {formattedDate(order.createdAt, 'DD/MM/YYYY')}
              </p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={16}>
        <Row gutter={[8, 16]}>
          <Col span={24}>
            <Card bordered={false}>
              <Row gutter={[8, 8]}>
              <Col span={24}>
                  <p>Produtos</p>
                </Col>
                <Col span={24}>
                  <Table
                    columns={columns(handleProductMovimentation)}
                    dataSource={order.orderProducts}
                  />
                </Col>

              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card bordered={false}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <p>Detalhes do cliente</p>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Nome do cliente</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>CPF/CNPJ</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Telefone</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={16}>
                  <p style={{ marginBottom: '4px' }}>Rua</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Nº</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Complemento</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Bairro</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Cidade</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Estado</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Cep</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer.name}</Title>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={8}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <p>Histório de Movimentação do Produto</p>
            </Col>
            <Col span={24}>
              <Steps direction="vertical">
                {productMovimentation.map(({
                    id,
                    status,
                    product,
                    createdAt,
                    quantity,
                  }) => (
                  <Step
                    key={id}
                    title={status.value}
                    description={
                      <>
                        {product.name} - Quatidade: <b>{quantity}</b><br />
                        {formattedDate(createdAt, 'DD/MM/YYYY - HH:mm')}
                      </>
                    }
                  />
                ))}
                {productMovimentation.length === 0 && (
                  <Title level={5}>Para ver as operação selecione um produto ao lado</Title>
                )}
              </Steps>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>

  )
}

export default Detail
