import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const ConfirmStep = () => {
  return (
    <>
      <Title level={4}>CONFIRMAÇÃO DA ORDEM</Title>
      <p>Confirme abaixo os dados informados e finalize a criação dessa ordem</p>
    </>
  )
}

export default ConfirmStep
