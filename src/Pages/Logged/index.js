import React from 'react'
import { Row, Col } from 'antd'
import { Switch } from 'react-router-dom'

import ProtectedRoute from '../../Routes/protectedRoute'
import rootRoutes from '../../Routes/root'
import Header from '../../Components/Header'
import Layout from '../../Components/Layout'

const renderRoute = route => (
  <ProtectedRoute
    key={route.path}
    {...route}
  />
)

const Logged = () => (
  <Layout>
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Header rootRoutes={rootRoutes} />
      </Col>
      <Col span={24}>
        <Switch>
          {rootRoutes.map(renderRoute)}
        </Switch>
      </Col>
    </Row>
  </Layout>
)

export default Logged
