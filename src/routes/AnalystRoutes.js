import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CountBoardPage from '../pages/CountBoardPage';
import NotFoundPage from '../pages/NotFoundPage'
import WelcomePage from '../pages/WelcomePage';
import AssistancePage from '../pages/AssistancePage'


export default function AnalystRoutes() {
    return (
        <BrowserRouter>
            <Sidebar />
                <Routes>
                    <Route exact path="/inicio" component={WelcomePage} />
                    <Route exact path="/scop/obrero/tablero_conteo" component={CountBoardPage} />
                    <Route exact path='/scop/obrero/asistencia' component={AssistancePage} />
                    <Route path="404" component={NotFoundPage} />
                    <Route path="*">
                        <Navigate to="/404" />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}