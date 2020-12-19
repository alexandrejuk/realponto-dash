import React from 'react'
import { Row, Col } from 'antd'
import { Switch, Route } from 'react-router-dom'
import rootRoutes from './Routes/root'

import Header from './Components/Header'
import Layout from './Components/Layout'

const renderRoute = route => (
  <Route
    key={route.path}
    {...route}
  />
)

const App = () => (
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


export default App
