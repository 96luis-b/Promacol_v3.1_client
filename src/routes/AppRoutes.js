import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import SwitchRolRoutes from './SwitchRolRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function AppRoutes() {



  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Redirect to="/login" />
        </Route>
        <Route path='/login' component={LoginPage} />
        <SwitchRolRoutes />
        
        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
            <Redirect to="/404" />
        </Route>

        {/* <PublicRoute path="/login" component={LoginPage} />

        <Route path="/inicio" component={SwitchRolRoutes} />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route> */}


      </Switch>
    </Router>
  );
}

export default AppRoutes;
