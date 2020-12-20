import React, { useState } from 'react'
import {
  Card,
  Typography,
  Radio,
  Row,
  Col,
  Button,
} from 'antd'
import {
  PlusOutlined,
  MenuOutlined,
  BarChartOutlined,
} from '@ant-design/icons'


import OrderList from './OrderList'
import Chart from './Chart'

const options = [
  { label: <MenuOutlined />, value: 'table' },
  { label: <BarChartOutlined />, value: 'chart' },
];
const { Title } = Typography

const chartData = [ {
  name:'2020-11-18',
  sale:1485644,
  in_analysis:80657,
  pending_analysis:121595,
  buy:10500,
},{
  name:'2020-11-19',
  sale:2280000
},{
  name:'2020-11-25',
  sale:704000}
,{
  name:'2020-11-27',
  in_analysis:17000
}]

const Manager = ({
  datasource,
  goToAddOrder,
  goToAddOrderOut,
  goToOrderDetail,
}) => {
  const [radioValue, setRadioValue] = useState('table')

  const radioOnChange = ({ target }) => (
    setRadioValue(target.value)
  )

  return (
    <Card bordered={false}>
      <Row gutter={[0, 20]}>
        <Col span={8}>
          <Title level={5}>
            18/11/2020 - 18/11/2020
            <span style={{ fontWeight: 'normal' }}> | </span>
            768 <span style={{ fontWeight: 'normal' }}>Ordens</span>
          </Title>
        </Col>
        <Col span={16} style={{ textAlign: 'right' }}>
          <Button
            onClick={goToAddOrderOut}
            style={{ marginRight: '16px'}}
            icon={<PlusOutlined />}
            danger
          >
            Adicionar Saída
          </Button>
          <Button
            onClick={goToAddOrder}
            style={{ marginRight: '16px'}}
            icon={<PlusOutlined />}
          >
            Adicionar Entrada
          </Button>
          <Radio.Group
            options={options}
            optionType="button"
            onChange={radioOnChange}
            value={radioValue}
            buttonStyle="solid"
          />
        </Col>
        <Col span={24}>
          {radioValue === 'chart' && <Chart data={chartData} />}
          {radioValue === 'table' && (
            <OrderList
              datasource={datasource}
              goToOrderDetail={goToOrderDetail}
            />
          )}
        </Col>
      </Row>

    </Card>
  )
}

export default Manager
