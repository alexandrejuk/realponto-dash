import React, { useState } from 'react'
import { Card, Typography, Row, Col, Tag, Steps } from 'antd'
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

const Detail = () => {
  const [productMovimentation, setProductMovimentation] = useState([])
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Usuário</p>
              <Title level={5}>{orderDetail.user.name}</Title>
            </Col>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Status</p>
              <Title level={5}>
                <Tag color={statusColors[orderDetail.status]}>{translateStatus[orderDetail.status]}</Tag>
              </Title>
            </Col>
            <Col span={6}>
            </Col>
            <Col span={6} style={{ textAlign: "right" }}>
              <p style={{ marginBottom: '4px' }}>
                Data de criação: {formattedDate(orderDetail.createdAt, 'DD/MM/YYYY')}
              </p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={16}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Usuário</p>
              <Title level={5}>{orderDetail.user.name}</Title>
            </Col>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Status</p>
              <Title level={5}>
                <Tag color={statusColors[orderDetail.status]}>{translateStatus[orderDetail.status]}</Tag>
              </Title>
            </Col>
            <Col span={6}>
            </Col>
            <Col span={6} style={{ textAlign: "right" }}>
              <p style={{ marginBottom: '4px' }}>
                Data de criação: {formattedDate(orderDetail.createdAt, 'DD/MM/YYYY')}
              </p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={8}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={24} style={{ textAlign: "center", marginBottom: "16px"}}>
              <Title level={5}>Histório de Movimentação do Produto</Title>
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
                    title={translateStatus[status]}
                    description={
                      <>
                        {formattedDate(createdAt, 'DD/MM/YYYY - HH:mm')} <br />
                        {product.name} <br /> Quatidade: <b>{quantity}</b>
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
