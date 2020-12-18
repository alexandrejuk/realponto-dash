import React from 'react'
import { Form, Select, Typography } from 'antd'
import orderStatus from '../../../../utils/orderStatus'
const { Option } = Select
const { Title } = Typography
const requiredRules = [{
  required: true,
  message: 'Campo obrigatório!'
}]

const TransactionStep = ({
  formData,
  handleOnChange,
}) => {
  const changeFormValue = name => value => handleOnChange({
    target: {
      name,
      value,
    }
  })
  return (
    <>
      <Title level={4}>TIPO ORDEM</Title>
      <p>Selecione o tipo de ordem que deseja adicionar</p>
      <Form layout="vertical" initialValues={formData}>
        <Form.Item
          name="status"
          label="Tipo da ordem"
          hasFeedback
          rules={requiredRules}
        >
          <Select
            placeholder="Selecione o tipo da ordem"
            onChange={changeFormValue('status')}
            notFoundContent="Nenhum tipo de ordem encontrado!"
          >
            {orderStatus.map(({ value, label }) => (
              <Option key={value} value={value}>{label}</Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </>
  )
}

export default TransactionStep
