import React from 'react'
import {
  Button,
  Form,
  InputNumber,
  Select,
  Radio,
  Table,
  Typography,
} from 'antd'

const { Option } = Select
const { Title } = Typography

const columns = [
  {
    title: 'Produto',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantity',
    key: 'quantity',
    fixed: 'left',
  },
  {
    title: 'Análise?',
    dataIndex: 'quantity',
    key: 'quantity',
    fixed: 'left',
    render: (value) => <>{value ? 'Sim' : 'Não'}</>,
  },
  {
    title: '',
    key: 'operation',
    fixed: 'right',
    render: () => (
      <Button type="link" danger>
        Remover
      </Button>
    ),
  },
]

const ProductStep = ({
  formData,
  handleOnChange,
  handleAddProduct,
  productsAdded,
  productList,
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
      <Title level={4}>PRODUTOS</Title>
      <p>Adicione os produtos que irão compor a ordem</p>
      <Form
        layout="inline"
        initialValues={formData}
      >

        <Form.Item
          name="productId"
          label="Produto"
          hasFeedback
        >
          <Select
            placeholder="Selecione o produto"
            onChange={changeFormValue('productId')}
            style={{ width: 400 }}
            notFoundContent="Nenhum produto encontrado!"
          >
            {productList.map(OptionComponent)}
          </Select>
        </Form.Item>
        <Form.Item label="Quantidade" name="quantity">
          <InputNumber style={{ width: 200 }} min={1} onChange={changeFormValue('quantity')} />
        </Form.Item>
        <Form.Item
          name="statusProduct"
          label="Análise?"
        >
          <Radio.Group onChange={handleOnChange} name="statusProduct">
            <Radio value={true}>Sim</Radio>
            <Radio value={false}>Não</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name=""
          label=""
        >
          <Button onClick={handleAddProduct} type="primary">
            Adicionar Produto
          </Button>
        </Form.Item>
      </Form>
      <Table
        style={{
          marginTop: 50,
          marginBottom: 50,
        }}
        columns={columns}
        dataSource={productsAdded}
        locale={{ emptyText: "Nenhum produto adicionado a ordem" }}
      />
    </>
  )
}

export default ProductStep
