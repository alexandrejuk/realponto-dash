import React, { useState } from 'react'
import {
  PageHeader,
  Card,
  Row,
  Col,
  Steps,
  message,
} from 'antd'

import OrderInfoStep from './OrderInfoStep'
import TransactionStep from './TransctionStep'
import ProductStep from './ProductStep'
import ConfirmStep from './ConfirmStep'
import StepButtons from './StepButtons'

const { Step } = Steps

const steps = [
  OrderInfoStep,
  TransactionStep,
  ProductStep,
  ConfirmStep,
]

const initialFormData = {
  customerId: '',
  userId: '',
  status: '',
  statusProduct: '',
  productId: '',
}

const Add = ({
  productList,
  customerList,
  userList,
}) => {
  const [current, setCurrent] = useState(0)
  const [formData, setFormData] = useState(initialFormData)
  const [productsAdded, setProductsAdded] = useState([])
  const [productSelected, setProductSelected] = useState({})

  const next = () => {
    console.log(formData)
    setCurrent(current + 1)
  }

  const prev = () => {
    console.log(formData)
    setCurrent(current - 1)
  }

  const done = () => message.success('Processing complete!')
  const ComponentStep = steps[current]

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    if (name === 'productId') {
      setProductSelected(productList.find(product => product.id === value))
      // console.log(JSON.parse(JSON.stringify(value)))
      console.log('adicionar o nome e o id do produto para colocarmos na tabela depois do adicionar')
    }
    setFormData({...formData, [name]: value })
  }

  const handleAddProduct = () => {
    setProductsAdded([
      ...productsAdded,
      {
        productId: formData.productId,
        quantity: formData.quantity,
        statusProduct: formData.statusProduct,
        name: productSelected.name,
      }
    ])
  }

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <PageHeader
          onBack={() => window.history.back()}
          title="ADICIONAR ORDEM"
        />
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <Steps current={current}>
            {steps.map((_, index) => (<Step key={index} />))}
          </Steps>
        </Card>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[8, 16]}>
            <Col span={24}>
              <ComponentStep
                formData={formData}
                handleOnChange={handleOnChange}
                handleAddProduct={handleAddProduct}
                productsAdded={productsAdded}
                customerList={customerList}
                userList={userList}
                productList={productList}
              />
            </Col>
            <Col span={24}>
              <StepButtons
                current={current}
                steps={steps.length}
                next={next}
                prev={prev}
                done={done}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default Add
