import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import CountBoardPage from '../pages/CountBoardPage'
import NotFoundPage from '../pages/NotFoundPage'

import AssistancePage from '../pages/AssistancePage'
import RegisterEmployeePage from '../pages/RegisterEmployeePage'
import StatisticalReportPage from '../pages/StatisticalReportPage'
import GraphicReportPage from '../pages/GraphicReportPage'
import DataInsertionPage from '../pages/DataInsertionPage'
import PayrollPage from '../pages/PayrollPage'
import PaySupplierPage from '../pages/PaySupplierPage'
import InventoryPage from '../pages/InventoryPage'
import DispRecepPage from '../pages/DispRecepPage';
import SupplierPage from '../pages/SupplierPage';
import WelcomePage from '../pages/WelcomePage';


export default function AdminRoutes() {
    return (<>
        <Sidebar />
        <Routes>
            <Route exact path="/inicio" element={<WelcomePage />} />
            <Route exact path="/scop/obrero/tablero_conteo" element={<CountBoardPage />} />
            <Route exact path='/scop/obrero/asistencia' element={<AssistancePage />} />
            <Route exact path='/scop/obrero/registrar' element={<RegisterEmployeePage />} />
            <Route exact path='/scop/obrero/asistencia_asistida' element={<AssistancePage />} />
            <Route exact path='/scop/reporte/estadistico' element={<StatisticalReportPage />} />
            <Route exact path='/scop/reporte/grafico' element={<GraphicReportPage />} />
            <Route exact path='/scop/extrac_producto' element={<DataInsertionPage />} />
            <Route exact path='/scop/pesaje' element={<DataInsertionPage />} />
            <Route exact path='/scop/pago_nomina' element={<PayrollPage />} />
            <Route exact path='/scop/pago_proveedor' element={<PaySupplierPage />} />
            <Route exact path='/scop/recepción_despacho' element={<DispRecepPage />} />
            <Route exact path='/scop/proveedor' element={<SupplierPage />} />
            <Route exact path='/scop/inventario' element={<InventoryPage />} />
        </Routes>
    </>
    )
}
