import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routes from './routes'
import { Packages } from './pages/Packages'
import { Order } from './pages/Order'
import { PackageDetail } from './pages/PackageDetail'
import GlobalStyles from './globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path={routes.HOMEPAGE} exact component={Packages} />
        <Route path={routes.PACKAGE_DETAIL} exact component={PackageDetail} />
        <Route path={routes.ORDER} component={Order} />
      </Switch>
    </>
  )
}

export { App }
