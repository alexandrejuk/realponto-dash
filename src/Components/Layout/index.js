import React from 'react'
import { Menu, Layout } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

const { Sider, Content } = Layout

const LayoutComponent = ({
  children
}) => (
  <Layout>
    <Sider
      theme="light"
      collapsible
      collapsed={false}
      width={256}
      trigger={null}
    >
      <Menu
        theme="ligth"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ width: 256 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout >
      <Content
        style={{
          padding: 16,
          minHeight: '100vh',
        }}
      >
        { children || 'Nenhum conteúdo criado!' }
      </Content>
    </Layout>
  </Layout>
)

export default LayoutComponent
