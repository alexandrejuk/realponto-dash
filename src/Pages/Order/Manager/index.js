import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import ManagerContainer from '../../../Containers/Order/Manager'
import { getAllOrder, getAllOrderSummary } from '../../../Services/Order'

const Manager = ({
  history,
}) => {
  const [datasource, setDatasource] = useState({})
  const [datasourceChart, setDatasourceChart] = useState([])
  const [chartSettings, setChartSettings] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    handleGetAllOrders()
  }, [])

  const handleGetAllOrders = async () => {
    const today = moment(new Date())

    const query = {
      initialDate: today.toString(),
      finalyDate: today.toString(),
      page,
      limit: 25
    }

    const { data } = await getAllOrder(query)
    const { data: { source, chartSettings } } = await getAllOrderSummary(query)
    setDatasourceChart(source)
    setChartSettings(chartSettings)
    setDatasource(data)
  }

  const handleGetOrdersByFilters = async(values) => {
    const { user_name, dates, pendingReview } = values
    const checkedPendingReview = (
      pendingReview && pendingReview.length < 2 && pendingReview.length !== 0
       ? { pendingReview:  pendingReview[0] === 'Não' ? false : true }
       : {}
    )

    const buildQuerySpec = {
      user_name,
      initialDate: dates && dates[0].toString(),
      finalyDate: dates && dates[1].toString(),
      ...checkedPendingReview ,
      page,
      limit: 25
    }

    const { data } = await getAllOrder(buildQuerySpec)
    const { data: { source, chartSettings } } = await getAllOrderSummary(buildQuerySpec)
    setDatasourceChart(source)
    setChartSettings(chartSettings)
    setDatasource(data)
  }

  const handlePagination = async (nextpage) => {
    try {
      const { data } = await getAllOrder({ page: nextpage, limit: 25 })
      setPage(nextpage)
      setDatasource(data)
    } catch (error) {

    }
  }

  const goToAddOrder = () => history.push('/order-inputs')
  const goToOrderDetail = (id) => history.push(`/order/detail/${id}`)
  const goToAddOrderOut = () => history.push('/order-outups')

  return (
    <ManagerContainer
      datasource={datasource}
      goToAddOrder={goToAddOrder}
      goToOrderDetail={goToOrderDetail}
      goToAddOrderOut={goToAddOrderOut}
      handleGetOrdersByFilters={handleGetOrdersByFilters}
      handlePagination={handlePagination}
      datasourceChart={datasourceChart}
      chartSettings={chartSettings}
    />
  )
}

export default withRouter(Manager)
