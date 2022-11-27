import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NotFoundPage from '../pages/NotFoundPage'

export default function WeiSupRoutes() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path="404" component={NotFoundPage} />
                <Route path="*">
                    <Navigate to="/404" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}