import React from 'react'
import { Row, Col, Card, Input, Form, Button } from 'antd'

const UpdateMyPassword = () => {
  return (
    <Card bordered={false}>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <p>Alterar senha</p>
        </Col>
        <Col span={24}>
          <Form
            layout="vertical"
            name="form_in_modal"
          >
            <Form.Item
              name="oldPassword"
              label="Senha"
              rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="Nova senha"
              rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirme a nova senha"
              rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
            >
              <Input type="password" />
            </Form.Item>
          </Form>
        </Col>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="outline" danger style={{ marginRight: '14px' }}>Cancelar</Button>
          <Button type="primary">Salvar alterações</Button>
        </Col>
      </Row>
    </Card>
  )
}

export default UpdateMyPassword
