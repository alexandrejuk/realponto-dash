import OrderAdd from '../Pages/Order/Add'
import OrderDetail from '../Pages/Order/Detail'
import OrderManager from '../Pages/Order/Manager'
import CustomerAdd from '../Pages/Customer/Add'
import CustomerDetail from '../Pages/Customer/Detail'
import CustomerManager from '../Pages/Customer/Manager'
import ProductManager from '../Pages/Product/Manager'

const RootRoutes = [{
  component: OrderAdd,
  title: 'ADICIONAR ORDEM',
  path: '/order/add',
  exact: true,
  goBack: true,
},
{
  component: OrderDetail,
  title: 'DETALHES DA ORDEM',
  path: '/order/detail/:id',
  exact: true,
  goBack: true,
},
{
  component: OrderManager,
  title: 'ORDENS',
  path: '/order/manager',
  exact: true,
  goBack: false,
},
{
  component: ProductManager,
  title: 'PRODUTOS',
  path: '/product/manager',
  exact: true,
  goBack: false,
},
{
  component: CustomerManager,
  title: 'CLIENTES',
  path: '/customer/manager',
  exact: true,
  goBack: false,
},
{
  component: CustomerAdd,
  title: 'ADICIONAR CLIENTE',
  path: '/customer/add',
  exact: true,
  goBack: true,
},
{
  component: CustomerDetail,
  title: 'DETALHES DO CLIENTE',
  path: '/customer/detail/:id',
  exact: true,
  goBack: true,
}
]

export default RootRoutes
