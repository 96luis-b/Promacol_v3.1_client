import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// import CountBoardPage from '../pages/CountBoardPage'
import NotFoundPage from '../pages/NotFoundPage'

// import AssistancePage from '../pages/AssistancePage'
// import RegisterEmployeePage from '../pages/RegisterEmployeePage'
// import StatisticalReportPage from '../pages/StatisticalReportPage'
// import GraphicReportPage from '../pages/GraphicReportPage'
// import DataInsertionPage from '../pages/DataInsertionPage'
// import PayrollPage from '../pages/PayrollPage'
// import PaySupplierPage from '../pages/PaySupplierPage'
// import InventoryPage from '../pages/InventoryPage'
// import DispRecepPage from '../pages/DispRecepPage';
// import SupplierPage from '../pages/SupplierPage';
import WelcomePage from '../pages/WelcomePage';


export default function AdminRoutes() {
    return (<>
        <Sidebar />
        <Routes>
            <Route path="/*" element={<WelcomePage />} />
            {/* <Route exact path="/scop/obrero/tablero_conteo" component={CountBoardPage} />
                    <Route exact path='/scop/obrero/asistencia' component={AssistancePage} />
                    <Route exact path='/scop/obrero/registrar' component={RegisterEmployeePage} />
                    <Route exact path='/scop/obrero/asistencia_asistida' component={AssistancePage} />
                    <Route exact path='/scop/reporte/estadistico' component={StatisticalReportPage} />
                    <Route exact path='/scop/reporte/grafico' component={GraphicReportPage} />
                    <Route exact path='/scop/extrac_producto' component={DataInsertionPage} />
                    <Route exact path='/scop/pesaje' component={DataInsertionPage} />
                    <Route exact path='/scop/pago_nomina' component={PayrollPage} />
                    <Route exact path='/scop/pago_proveedor' component={PaySupplierPage} />
                    <Route exact path='/scop/recepción_despacho' component={DispRecepPage} />
                    <Route exact path='/scop/proveedor' component={SupplierPage} />
                    <Route exact path='/scop/inventario' component={InventoryPage} /> */}
        </Routes>
    </>
    )
    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={<WelcomePage />}>
    //             </Route>
    //         </Routes>
    //     </BrowserRouter>
    // )
}
