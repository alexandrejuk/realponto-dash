import React from 'react'
import { Modal, Form,   InputNumber, Select } from 'antd'
const { Option } = Select

const AddSerialNumber = ({
  visible,
  onCreate,
  onCancel,
  users,
  serialNumbers,
  productSelected,
}) => {
  const [form] = Form.useForm()
  const quantityMax = serialNumbers.filter(product => product.productId === productSelected.productId).length

  return (
    <Modal
      width={350}
      visible={visible}
      title="ADICIONAR NÚMERO SÉRIE"
      okText="Adicionar Número Série"
      cancelText="Cancelar"
      onCancel={() => {
        onCancel()
        form.resetFields()
      }}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields()
            onCreate(values)
          })
          .catch(info => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="userId"
          label="Selecione o usuário"
          hasFeedback
          style={{ marginBottom: '4px' }}
          required
        >
          <Select
            placeholder="Selecione o usuário"
            // onChange={changeFormValue('statusId')}
            notFoundContent="Nenhum usuário encontrado!"
          >
            {users && users.map(({ name, id }) => (
              <Option key={id} value={id}>{name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="minQuantity"
          label="Quantidade mínima"
          rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddSerialNumber
