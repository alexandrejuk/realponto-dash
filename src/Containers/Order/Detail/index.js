import React, { useState } from 'react'
import { Card, Typography, Row, Col, Tag, Steps, Table, Button } from 'antd'
import formattedDate from '../../../utils/parserDate'
import { cpf, cnpj } from 'cpf-cnpj-validator'

const { Step } = Steps
const { Title } = Typography

const columns = (detail) => (
  [
    {
      title: 'Status',
      dataIndex: 'status.value',
      render: (text, record) => (
        <Tag color={record.status.color}>{record.status.value}</Tag>
      )
    },
    {
      title: 'Descrição',
      dataIndex: 'productName',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
    },
    {
      title: '',
      dataIndex: 'productId',
      key: 'action',
      render: (text, record) => (
       <>
         <Button
          onClick={() => detail(text)}
          type="text"
        >
          Detalhes
        </Button>
        {/* abrir uma modal para escolher o que quer fazer adicionar numeros serial, ou algum tipo de said
          para produtos com status diferentes de aguardando analise nao podemos lançar saida só podemos lançar
          os numeros de series na moda de numero de serie temos que colocar o nome do tecnico que revisou
          nas ordens de saida podemos buscar os numeros de series que serao usados
          para status com analise pendente temos que colocar o fluxo no front para aceitar in_analysis, depois que tiver o retorno
          de return_anaylisis podemos adicionar o numero de seria no campo de coloca in_analysis temos que ter a quantidade para saber quantos estao sendo analisado
          para ordem do tipo de saida só podemos adidionar o
        // */}
        <Button
          onClick={() => detail(text)}
          type="link"
          primary
        >
          Adicionar Evento
        </Button>
       </>
      ),
    },
  ]
)

const Detail = ({
  order,
}) => {
  const [productMovimentation, setProductMovimentation] = useState([])

  const handleProductMovimentation = (productId) => {
    const movimentation = order.transactions.filter(product => product.productId === productId)
    setProductMovimentation(movimentation)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Usuário</p>
              <Title level={5}>{order.user && order.user.name}</Title>
            </Col>
            <Col span={6}>
              <p style={{ marginBottom: '4px' }}>Status</p>
              <Title level={5}>
                <Tag color={order.status && order.status.color}>{order.status && order.status.value}</Tag>
              </Title>
            </Col>
            <Col span={6}>
            </Col>
            <Col span={6} style={{ textAlign: "right" }}>
              <p style={{ marginBottom: '4px' }}>
                Data de criação: {formattedDate(order.createdAt, 'DD/MM/YYYY')}
              </p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={16}>
        <Row gutter={[8, 16]}>
          <Col span={24}>
            <Card bordered={false}>
              <Row gutter={[8, 8]}>
              <Col span={24}>
                  <p>Produtos</p>
                </Col>
                <Col span={24}>
                  <Table
                    columns={columns(handleProductMovimentation)}
                    dataSource={order.orderProducts}
                  />
                </Col>

              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card bordered={false}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <p>Detalhes do cliente</p>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Nome do cliente</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>CPF/CNPJ</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{
                    order.customer
                    && order.customer.document.length > 11
                      ? cnpj.format(order.customer.document)
                      : cpf.format(order.customer.document)
                    }
                  </Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Telefone</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.phone}</Title>
                </Col>

                {/* temos que adicionar a tabela de endereço no backend depois só descomentar o codigo abaixo */}
                {/* <Col span={16}>
                  <p style={{ marginBottom: '4px' }}>Rua</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Nº</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Complemento</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Bairro</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: '4px' }}>Cidade</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Estado</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col>
                <Col span={4}>
                  <p style={{ marginBottom: '4px' }}>Cep</p>
                  <Title level={5} style={{ fontWeight: 'normal' }}>{order.customer && order.customer.name}</Title>
                </Col> */}
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={8}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <p>Histório de Movimentação do Produto</p>
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
                    title={status.value}
                    description={
                      <>
                        {product.name} - Quatidade: <b>{quantity}</b><br />
                        {formattedDate(createdAt, 'DD/MM/YYYY - HH:mm')}
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
