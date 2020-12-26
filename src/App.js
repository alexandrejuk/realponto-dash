import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { Switch, Route } from 'react-router-dom'
import rootRoutes from './Routes/root'

import Login from './Pages/Login'
import Header from './Components/Header'
import Layout from './Components/Layout'
import Auth from './Services/Auth'

const renderRoute = route => (
  <Route
    key={route.path}
    {...route}
  />
)

const App = () => {
  useEffect(() => {
    authentication()
  }, [])

  const authentication = async () => {
    const { data } = await Auth(  {
      email: 'alexandre_santos@hotmail.com',
      password: '123456'
    })
    localStorage.setItem('token', data.token)
    localStorage.setItem('user.name', data.name)
  }

  return (
    <>
      {/* <Route path='/login' component={Login} /> */}
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
    </>
  )
}


export default App
