import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Sidebar from '../components/Sidebar';
import CountBoardPage from '../pages/CountBoardPage';

import NotFoundPage from '../pages/NotFoundPage'
import PayrollPage from '../pages/PayrollPage';
import StatisticalReportPage from '../pages/StatisticalReportPage';
import WelcomePage from '../pages/WelcomePage';
import AssistancePage from '../pages/AssistancePage'


export default function AnalystRoutes() {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route exact path="/inicio" component={WelcomePage} />
                <Route exact path="/scop/obrero/tablero_conteo" component={CountBoardPage} />
                <Route exact path='/scop/obrero/asistencia' component={AssistancePage} />
                <Route path="404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    )
}