import React from 'react'
import {
  PageHeader,
  Button,
  Menu,
  Dropdown,
  Row,
  Col,
} from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Switch, Route, withRouter } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

const menu = (
  <Menu onClick={() => console.log('aqui')} style={{ width: 300 }}>
    <Menu.Item key="1">Dados cadastrais</Menu.Item>
    <Menu.Item key="2">Gerenciamento de equipe</Menu.Item>
    <Menu.Item key="3">Alterar senha</Menu.Item>
    <Menu.Item key="4">Sair</Menu.Item>
  </Menu>
)

const Header = ({
  rootRoutes,
  history,
}) => {

  const renderHeader = props => () => (
    <Row>
      <Col span={12}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {(
            <Button
              icon={<LeftOutlined />}
              onClick={history.goBack}
              type="link"
              disabled={!props.goBack}
              style={{
                opacity: props.goBack ? 1 : 0,
                cursor:  props.goBack ? 'pointer' : 'default',
              }}
            />
          )}
          <h1 style={{
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '32px',
            marginBottom: 0,
          }}>
            {props.title}
          </h1>
        </div>
      </Col>
      <Col span={12} style={{ textAlign: 'right' }}>
      <Dropdown
        key="1"
        overlay={menu}
        trigger={['click']}
        onClick={e => e.preventDefault()}
      >
        <Button type="link" style={{ fontSize: '14px' }}>
          Alexandre Soares <DownOutlined />
        </Button>
      </Dropdown>
      </Col>
    </Row>
  )

  const renderRoute = route => (
    <Route
      key={route.path}
      {...route}
      component={renderHeader(route)}
    />
  )

  return (
    <PageHeader style={{ padding: '0 0 16px 0' }}>
      <Switch>
        {rootRoutes.map(renderRoute)}
      </Switch>
    </PageHeader>
  )
}

export default withRouter(Header)
