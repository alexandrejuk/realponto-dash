import React, { useState } from 'react'
import {
  PageHeader,
  Card,
  Form,
  Row,
  Col,
  Steps,
  message,
  Button,
  Menu,
  Dropdown,
  Modal,
} from 'antd'
import {
  isEmpty,
  mergeRight,
  lte,
  length,
  find,
  propEq,
} from 'ramda'

import { DownOutlined } from '@ant-design/icons'
import OrderInfoStep from './OrderInfoStep'
import TransactionStep from './TransctionStep'
import ProductStep from './ProductStep'
import ConfirmStep from './ConfirmStep'
import StepButtons from './StepButtons'
import validatorStep from './validatorForm'

const { Step } = Steps

const info = () => {
  Modal.info({
    title: 'Deseja cancelar?',
    content: (
      <div>
        <p>Ao cancelar a ordem os não em progressos serão perdidos.</p>
      </div>
    ),
    onOk() {},
    onCancel() {},
  });
}

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
  products: [],
}

const Add = ({
  goToManagerOrder,
  productList,
  customerList,
  userList,
}) => {
  const [current, setCurrent] = useState(0)
  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState({})
  const [form] = Form.useForm();
  const [customerSelected, setCustomerSelected] = useState({})
  const [userSelected, setUserSelected] = useState({})

  const navigationStep = (step) => setCurrent(step)

  const next = () => {
    const errors = validatorStep(formData, current)

    if (errors && errors.products) {
      message.error('É necessário adicionar pelo menos um produto!')
    }

    setFormErrors(errors)
    isEmpty(errors) && setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const done = () => message.success('Processing complete!')
  const ComponentStep = steps[current]

  const handleOnChange = ({ target }) => {
    let errors = {}
    const { name, value } = target
    const formPayload = mergeRight(formData, { [name]: value })
    setFormData(formPayload)

    if (name === 'userId') {
      setUserSelected(
        userList.find(user => user.id === value)
      )
    }

    if (name === 'customerId') {
      setCustomerSelected(
        customerList.find(customer => customer.id === value)
      )
    }

    errors = validatorStep(formPayload, current)
    setFormErrors(errors)
  }

  const handleAddProduct = (values) => {
    let errors = {}
    const findProduct = (
      lte(0, length(productList))
      && find(propEq('id', values.productId), productList)
    )

    errors = validatorStep(values)
    setFormErrors(errors)

    const findProductAdded = formData.products.find(product => (
      product.productId === values.productId
      && product.statusProduct === values.statusProduct
    ))

    if (findProductAdded) {
      isEmpty(errors) && setFormData({
        ...formData,
        products: formData.products.map(product => (
          product.productId === values.productId
          && product.statusProduct === values.statusProduct
            ? ({...product, quantity: product.quantity + values.quantity })
            : product
        ))
      })
    } else {
      isEmpty(errors) && setFormData({
        ...formData,
        products: [
          ...formData.products,
          {...values, name: findProduct.name },
        ]
      })
    }


    return form.resetFields()
  }

  const handleRemoveItem = productRemove => {
    const notEqual = productItem => {
      if(
        productItem.productId === productRemove.productId
        && productItem.statusProduct === productRemove.statusProduct
      ) {
        return
      }
      return productItem
    }

    setFormData({
      ...formData,
      products: formData.products.filter(notEqual)
    })
  }

  const menu = (
    <Menu onClick={() => console.log('aqui')} style={{ width: 300 }}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <PageHeader
          onBack={() => window.history.back()}
          title="ADICIONAR ORDEM"
          extra={[
            <Dropdown overlay={menu} trigger={['click']}>
              <Button primary type="link" onClick={e => e.preventDefault()}>
                Alexandre Soares <DownOutlined />
              </Button>
            </Dropdown>,
          ]}
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
                customerList={customerList}
                userList={userList}
                productList={productList}
                formErrors={formErrors}
                handleRemoveItem={handleRemoveItem}
                form={form}
                customerSelected={customerSelected}
                userSelected={userSelected}
                navigationStep={navigationStep}
              />
            </Col>
          </Row>
          <Row justify="end">
            <Col span={12} style={{ textAlign: "left" }}>
              <Button type="text" onClick={info}>
                Cancelar
              </Button>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
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
