import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './Pages/Login'
import logged from './Pages/Logged'

const App = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/logged' component={logged} />
      <Redirect from="*" to="/login" />
    </Switch>
  )
}


export default App
