import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Sidebar from '../components/Sidebar';

// import DashboardPage from '../pages/DashboardPage'
import NotFoundPage from '../pages/NotFoundPage'
import PayrollPage from '../pages/PayrollPage';
import StatisticalReportPage from '../pages/StatisticalReportPage';
import WelcomePage from '../pages/WelcomePage';
// import InsertDataPage from '../pages/InsertDataPage'
// import ReportPage from '../pages/ReportPage'
// import WeighingPage from '../pages/WeighingPage'
// import ReportPaymentPage from '../pages/ReportPaymentPage'
// import SignupWorkerPage from '../pages/SignupWorkerPage'
// import SignupEmployeePage from '../pages/SignupEmployeePage'
// import ReportDataWeighingPage from '../pages/ReportDataWeighingPage'
// import ProductPage from '../pages/ProductPage'
// import Sidebar from '../components/Sidebar'

export default function CashierRoutes() {
    return (
        <BrowserRouter>
            <Sidebar />
                <Routes>
                    <Route exact path="/inicio" component={WelcomePage} />
                    <Route exact path='/scop/reporte/estadistico' component={StatisticalReportPage} />
                    <Route exact path='/scop/pago_nomina' component={PayrollPage} />
                    <Route path="404" component={NotFoundPage} />
                    <Route path="*">
                        <Navigate to="/404" />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}