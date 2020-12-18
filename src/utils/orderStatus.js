const orderStatus = [
  // status de saida
  { value: 'sale', label: 'Venda' },
  { value: 'ecommerce', label: 'Ecommerce' },
  { value: 'free_market', label: 'Mercado Livre' },
  { value: 'technician', label: 'Técnico' },
  { value: 'outputs', label: 'Saída' },
  { value: 'booking', label: 'Reserva' },
  { value: 'tenancy', label: 'Locação' },
  { value: 'borrowing', label: 'Empréstimo' },
  { value: 'in_analysis', label: 'Em Análise' },
  { value: 'repair', label: 'Conserto' },
  // status de entrada
  { value: 'buy', label: 'Compra' },
  { value: 'inputs', label: 'Entrada' },
  { value: 'exchange', label: 'Troca' },
  { value: 'analysis_return', label: 'Retorno Análise' },
  { value: 'repair_return', label: 'Retorno Conserto' },
  { value: 'booking_return', label: 'Restorno Reserva' },
  { value: 'borrowing_with_pending_analysis_return', label: 'Retorno Empréstimo e Aguardando Análise' },
  { value: 'tenancy_with_pending_analysis_return', label: 'Retorno Locação e Aguardando Análise' },
  { value: 'technician_return', label: 'Retorno Técnico' },
  { value: 'technician_with_pending_analysis_return', label: 'Retorno Técnico e Aguardando Análise' },
  { value: 'ecommerce_with_pending_analysis_return', label: 'Retorno Ecommerce e Aguardando Análise' },
  { value: 'free_market_return', label: 'Retorno Mercado Livre' },
  { value: 'free_market_with_analysis_return', label: 'Retorno Mercado Livre e Aguardando Análise' },
]

const translateStatus = {
  // status de saida
  sale: 'Venda',
  ecommerce: 'Ecommerce',
  free_market: 'Mercado Livre',
  technician: 'Técnico',
  outputs: 'Saída',
  booking: 'Reserva',
  tenancy: 'Locação',
  borrowing: 'Empréstimo',
  in_analysis: 'Em Análise',
  repair: 'Conserto',
  // status de entrada
  buy: 'Compra',
  inputs: 'Entrada',
  exchange: 'Troca',
  analysis_return: 'Retorno Análise',
  repair_return: 'Retorno Conserto',
  booking_return: 'Restorno Reserva',
  borrowing_with_pending_analysis_return: 'Retorno Empréstimo e Aguardando Análise',
  tenancy_with_pending_analysis_return: 'Retorno Locação e Aguardando Análise',
  technician_return: 'Retorno Técnico',
  technician_with_pending_analysis_return: 'Retorno Técnico e Aguardando Análise',
  ecommerce_with_pending_analysis_return: 'Retorno Ecommerce e Aguardando Análise',
  free_market_return: 'Retorno Mercado Livre',
  free_market_with_analysis_return: 'Retorno Mercado Livre e Aguardando Análise',
}

export {
  orderStatus,
  translateStatus,
}
