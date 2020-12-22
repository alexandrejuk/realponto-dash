import React, { useState } from 'react'
import { Row, Col, Card, Button, Typography, Input, Checkbox } from 'antd'
import Add from '../Add'
import Edit from '../Edit'
import ProductList from './ProductList'

import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
const CheckboxGroup = Checkbox.Group;

const { Title } = Typography
const plainOptions = ['Ativo', 'Inativo']
const defaultCheckedList = ['Ativo', 'Inativo']

const Manager = ({
  handleSubmitUpdate,
  handleSubmit,
  products,
}) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [visible, setVisible] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [productSelected, setProductSelected] = useState({})

  const onSubmitUpdate = values => {
    handleSubmitUpdate({...values, id: productSelected.id })
    setVisibleEdit(false)
    setProductSelected({})
  }

  const onSubmit = values => {
    handleSubmit(values)
    setVisible(false)
  }

  const handleChooseProduct = product => {
    setProductSelected(product)
    setVisibleEdit(true)
  }

  const handleCloseModalEdit = () => {
    setVisibleEdit(false)
    setProductSelected({})
  }

  const onChange = list => {
    setCheckedList(list)
  }

  return (
    <Row gutter={[8, 16]}>
      <Col span={24}>
        <Card bordered={false}>
          <Row>
            <Col span={12}>
              <Title style={{ marginBottom: 0 }} level={4}>Crie novos produtos</Title>
              <p style={{ marginBottom: 0 }}>Crie e gerencie os produtos do estoque</p>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                icon={<PlusOutlined />}
                onClick={() => setVisible(true)}
              >
                Adicionar Produto
              </Button>
            </Col>
          </Row>
        </Card>
        <Add
          visible={visible}
          onCreate={onSubmit}
          onCancel={() => setVisible(false)}
        />
          {
            visibleEdit &&
            <Edit
              visible
              onEdit={onSubmitUpdate}
              onCancel={handleCloseModalEdit}
              productSelected={productSelected}
            />
          }
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={15}>
              <Input placeholder="Filtre por nome" prefix={<SearchOutlined />} />
            </Col>
            <Col span={4}>
              <CheckboxGroup
                style={{ paddingTop: '5px' }}
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
                name="activated"
              />
            </Col>

            <Col span={5} style={{ textAlign: 'right' }}>
              <Button style={{ marginRight: '16px' }}>Limpar Filtros</Button>
              <Button type="primary">Filtrar</Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <ProductList
            datasource={products.source}
            chooseProduct={handleChooseProduct}
          />
        </Card>
      </Col>
    </Row>
  )
}

export default Manager
