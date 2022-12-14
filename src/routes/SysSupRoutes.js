import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Sidebar from '../components/Sidebar';

import CountBoardPage from '../pages/CountBoardPage'
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

export default function SysSupRoutes() {
    return (<>
        <Sidebar />
        <BrowserRouter>
            <Routes>
                <Route path="/" component={CountBoardPage} />
                <Route path="404" component={NotFoundPage} />
                <Route path="*">
                    <Navigate to="/404" />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}