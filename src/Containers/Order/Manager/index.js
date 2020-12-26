import React, { useState } from 'react'
import {
  Card,
  Typography,
  Radio,
  Row,
  Col,
  Button,
  Input,
  Checkbox,
  DatePicker
} from 'antd'
import {
  PlusOutlined,
  MenuOutlined,
  BarChartOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import moment from 'moment'

import OrderList from './OrderList'
import Chart from './Chart'
import formattedDate from '../../../utils/parserDate'

const dateFormat = 'DD/MM/YYYY'

const { RangePicker } = DatePicker
const CheckboxGroup = Checkbox.Group
const plainOptions = ['Sim', 'Não']

const options = [
  { label: <MenuOutlined />, value: 'table' },
  { label: <BarChartOutlined />, value: 'chart' },
];
const { Title } = Typography
const today = moment(new Date(), dateFormat)
const initialFilterState = {
  dates: [today, today],
  pendingReview: ['Sim', 'Não'],
  user_name: '',
}

const Manager = ({
  datasource,
  goToAddOrder,
  goToAddOrderOut,
  goToOrderDetail,
  handleGetOrdersByFilters,
  handlePagination,
  chartSettings,
  datasourceChart,
}) => {
  const [radioValue, setRadioValue] = useState('table')
  const [filters, setFilters] = useState(initialFilterState)
  const radioOnChange = ({ target }) => (
    setRadioValue(target.value)
  )

  const onChange = ({ target }) => {
    const { name, value } = target
    if(name === 'pendingReview') {
      return setFilters({
        ...filters,
        [name]: (
          value.length === 0
          ? initialFilterState.pendingReview
          : value
        )
      })
    }

    return setFilters({
      ...filters,
      [name]: value
    })
  }

  const clearFilters = async () => {
    setFilters(initialFilterState)
    await handleGetOrdersByFilters(initialFilterState)
  }

  const handleFilter = async () => {
    await handleGetOrdersByFilters(filters)
  }

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <RangePicker
                value={filters.dates}
                format={dateFormat}
                placeholder=""
                onChange={value => onChange({ target: { name: 'dates', value }})}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Filtre por nome."
                prefix={<SearchOutlined />}
                onChange={onChange}
                name="user_name"
                value={filters.globalSearch}
              />
            </Col>
            <Col span={4} style={{ paddingTop: '7px', textAlign: 'center' }}>
              <span style={{ paddingLeft: '5px', paddingRight: '10px' }}>Revisar?</span>
              <CheckboxGroup
                options={plainOptions}
                value={filters.pendingReview}
                onChange={value => onChange({ target: { name: 'pendingReview', value }})}
              />
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}>
              <Button
                style={{ marginRight: '16px' }}
                onClick={clearFilters}
              >
                Limpar Filtros
              </Button>
              <Button type="primary" onClick={handleFilter}>Filtrar</Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[0, 20]}>
            <Col span={8}>
              <Title level={5}>
                {filters.dates && filters.dates[0] && formattedDate(filters.dates[0], 'DD/MM/YYYY - ')}
                {filters.dates && filters.dates[1] && formattedDate(filters.dates[1], 'DD/MM/YYYY')}
                <span style={{ fontWeight: 'normal' }}> | </span>
                {datasource.total} <span style={{ fontWeight: 'normal' }}>Ordens</span>
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
              {radioValue === 'chart' && <Chart data={datasourceChart} chartSettings={chartSettings} />}
              {radioValue === 'table' && (
                <OrderList
                  datasource={datasource.source}
                  goToOrderDetail={goToOrderDetail}
                  onChange={handlePagination}
                />
              )}
            </Col>
          </Row>

        </Card>
      </Col>
    </Row>
  )
}

export default Manager
