import React from 'react'
import { Form, Select, Typography } from 'antd'

const { Option } = Select
const { Title, Text } = Typography

const TransactionStep = ({
  formErrors,
  formData,
  handleOnChange,
  statusList,
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
        <div style={{ height: '88px', marginBottom: '20px' }}>
          <Form.Item
            name="status"
            label="Tipo da ordem"
            validateStatus={formErrors && formErrors.status ? 'error' : ''}
            hasFeedback
            style={{ marginBottom: '4px' }}
          >
            <Select
              placeholder="Selecione o tipo da ordem"
              onChange={changeFormValue('status')}
              notFoundContent="Nenhum tipo de ordem encontrado!"
            >
              {statusList && statusList.filter(status => status.label !== 'pending_analysis').map(({ value, label }) => (
                <Option key={label} value={label}>{value}</Option>
              ))}
            </Select>
          </Form.Item>
          <Text type="danger">{formErrors && formErrors.status}</Text>
        </div>
      </Form>
    </>
  )
}

export default TransactionStep
