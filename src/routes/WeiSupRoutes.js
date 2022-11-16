import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Sidebar from '../components/Sidebar';

// import DashboardPage from '../pages/DashboardPage'
import NotFoundPage from '../pages/NotFoundPage'
// import InsertDataPage from '../pages/InsertDataPage'
// import ReportPage from '../pages/ReportPage'
// import WeighingPage from '../pages/WeighingPage'
// import ReportPaymentPage from '../pages/ReportPaymentPage'
// import SignupWorkerPage from '../pages/SignupWorkerPage'
// import SignupEmployeePage from '../pages/SignupEmployeePage'
// import ReportDataWeighingPage from '../pages/ReportDataWeighingPage'
// import ProductPage from '../pages/ProductPage'
// import Sidebar from '../components/Sidebar'

export default function WeiSupRoutes() {
    return (
        <Router>
            <Sidebar />
            <Switch>
                {/*<Route path="/" component={DashboardPage} />*/}
               

                <Route path="404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    )
}