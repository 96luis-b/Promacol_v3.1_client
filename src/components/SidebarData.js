import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'
import * as TbIcons from 'react-icons/tb'
import * as CiIcons from 'react-icons/ci'
import * as HiIcons from 'react-icons/hi'

import useAuth from '../contexts/useAuth'


export const SidebarData = () => {
    const auth = useAuth()
    let data;
    switch (7) {
        case 7:
            data = AdminSidebarData
            break;
        case 8:
            data = AnalystSidebarData
            break;
        case 9:
            data = CashierSidebaData
            break;
        default:
            console.log('');
    }
    return data
}

export const AnalystSidebarData = [
    {
        title: 'Inicio',
        path: '/inicio',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Obreros',
        // path: '/scop',
        icon: <MdIcons.MdGroups />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Asistencia',
                path: '/scop/obrero/asistencia',
                icon: <MdIcons.MdHowToReg />,
            },
            // {
            //     title: 'Registrar',
            //     path: '/scop/obrero/registrar',
            //     icon: <MdIcons.MdAssignment />,
            // },
            {
                title: 'Tablero de conteo',
                path: '/scop/obrero/tablero_conteo',
                icon: <BsIcons.BsFileBarGraphFill />
            },
        ]
    },
]

export const CashierSidebaData = [
    {
        title: 'Inicio',
        path: '/inicio',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Obreros',
        // path: '/scop',
        icon: <MdIcons.MdGroups />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Asistencia',
                path: '/scop/obrero/asistencia',
                icon: <MdIcons.MdHowToReg />,
            },
        ]
    }, {
        title: 'Reportes',
        // path: '/scop',
        icon: <TbIcons.TbReport />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Estadisticos',
                path: '/scop/reporte/estadistico',
                icon: <TbIcons.TbReportSearch />,
            },
        ]
    }, {
        title: 'Pagos',
        // path: '/scop',
        icon: <TbIcons.TbCash />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Pago de nomina',
                path: '/scop/pago_nomina',
                icon: <HiIcons.HiUser />
            },
        ]
    },
]

export const AdminSidebarData = [
    {
        title: 'Inicio',
        path: '/inicio',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Obreros',
        // path: '/scop',
        icon: <MdIcons.MdGroups />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Asistencia',
                path: '/scop/obrero/asistencia',
                icon: <MdIcons.MdHowToReg />,
            },
            {
                title: 'Registrar',
                path: '/scop/obrero/registrar',
                icon: <MdIcons.MdAssignment />,
            },
            // {
            //     title: 'Asistencia asistida',
            //     path: '/scop/obrero/asistencia_asistida',
            //     icon: <FaIcons.FaCartPlus />
            // },
            {
                title: 'Tablero de conteo',
                path: '/scop/obrero/tablero_conteo',
                icon: <BsIcons.BsFileBarGraphFill />
            },
        ]
    },
    {
        title: 'Reportes',
        // path: '/scop',
        icon: <TbIcons.TbReport />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Estadisticos',
                path: '/scop/reporte/estadistico',
                icon: <TbIcons.TbReportSearch />,
            },
            {
                title: 'Graficos',
                path: '/scop/reporte/grafico',
                icon: <TbIcons.TbReportAnalytics />,
            },
        ]
    },
    {
        title: 'Inserción de datos',
        // path: '/scop',
        icon: <CiIcons.CiSaveDown2 />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Extracción de producto',
                path: '/scop/extrac_producto',
                icon: <RiIcons.RiDatabaseLine />
            },
            // {
            //     title: 'Pesaje',
            //     path: '/scop/pesaje',
            //     icon: <FaIcons.FaCartPlus />
            // },
        ]
    },
    {
        title: 'Unidades de producción',
        path: '/scop/unidad_produccion',
        icon: <CiIcons.CiViewList />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Moneda',
        // path: '/scop',
        icon: <BsIcons.BsCurrencyExchange />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Lista de monedas',
                path: '/scop/lista_moneda',
                icon: <RiIcons.RiFileList3Line />
            },
            {
                title: 'Tasa de cambio',
                path: '/scop/tasa_cambio',
                icon: <RiIcons.RiExchangeDollarLine />
            },
        ]
    },
    {
        title: 'Pagos',
        // path: '/scop',
        icon: <TbIcons.TbCash />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Pago de nomina',
                path: '/scop/pago_nomina',
                icon: <HiIcons.HiUser />
            },
            // {
            //     title: 'Pago proveedor',
            //     path: '/scop/pago_proveedor',
            //     icon: <FaIcons.FaCartPlus />
            // },
        ]
    },
    // {
    //     title: 'Recepcion & Despacho',
    //     path: '/scop/recepción_despacho',
    //     icon: <FaIcons.FaCartPlus />
    // },
    // {
    //     title: 'Proveedor',
    //     path: '/scop/proveedor',
    //     icon: <FaIcons.FaCartPlus />
    // },
    // {
    //     title: 'Inventario',
    //     path: '/scop/inventario',
    //     icon: <FaIcons.FaCartPlus />
    // },


]