import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';


import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import SwitchRolRoutes from './SwitchRolRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function AppRoutes() {



  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />
      <Route path='/login' element={<LoginPage/>} />
      <Route path="/*" element={<SwitchRolRoutes/>} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route
        path="*"
        element={<Navigate to="/404" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;

