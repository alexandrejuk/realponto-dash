import React from 'react'
import { Form, Select, Typography } from 'antd'

const { Option } = Select
const { Title } = Typography

const requiredRules = [{
  required: true,
  message: 'Campo obrigatório!'
}]

const OrderInfoStep = ({
  formData,
  handleOnChange,
  customerList,
  userList,
}) => {
  const OptionComponent = ({ id, name }) => (
    <Option key={id} value={id}>{name}</Option>
  )

  const changeFormValue = name => value => handleOnChange({
    target: {
      name,
      value,
    }
  })

  return (
    <>
      <Title level={4}>IDENTIFICAÇÃO</Title>
      <p>Preecha os campos do usuário ou cliente para está ordem</p>
      <Form layout="vertical" initialValues={formData}>
        <Form.Item
          name="userId"
          label="Usuário"
          hasFeedback
          rules={requiredRules}
        >
          <Select
            placeholder="Selecione o usuário"
            onChange={changeFormValue('userId')}
            notFoundContent="Nenhum usuário encontrado!"
          >
            {userList.map(OptionComponent)}
          </Select>
        </Form.Item>
        <Form.Item
          name="customerId"
          label="Cliente"
          hasFeedback
        >
          <Select
            placeholder="Selecione o cliente"
            onChange={changeFormValue('customerId')}
            notFoundContent="Nenhum cliente encontrado!"
          >
            {customerList.map(OptionComponent)}
          </Select>
        </Form.Item>
      </Form>
    </>
  )
}

export default OrderInfoStep
