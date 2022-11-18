import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Router, Navigate } from 'react-router-dom';


import Sidebar from '../components/Sidebar';

import AdminRoutes from './AdminRoutes'
import CashierRoutes from './CashierRoutes'
import SysSupRoutes from './SysSupRoutes'
import WeiSupRoutes from './WeiSupRoutes'
import AnalystRoutes from './AnalystRoutes'

export default function SwitchRolRoutes() {
  // const auth = useAuth()

  const renderSwitch = () => {
    switch (1) {
      case 1:
        return <AdminRoutes />;
      case 2:
        return <CashierRoutes />;
      case 3:
        return <SysSupRoutes />;
      case 4:
        return <WeiSupRoutes />;
      case 5:
        return <AnalystRoutes />;
      default:
        return null;
    }
  }

  return (
    <>
      {renderSwitch()}
    </>


  )
}