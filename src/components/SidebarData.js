import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as MdGroup from 'react-icons/md'
import useAuth from '../contexts/useAuth'


export const SidebarData = () => {
    const auth = useAuth()
    console.log("user: ", auth.user)
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
    // console.log("daaaataaa: ", data)
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
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Asistencia',
                path: '/scop/obrero/asistencia',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Registrar',
                path: '/scop/obrero/registrar',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Tablero de conteo',
                path: '/scop/obrero/tablero_conteo',
                icon: <FaIcons.FaCartPlus />
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
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Asistencia',
                path: '/scop/obrero/asistencia',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    }, {
        title: 'Reportes',
        // path: '/scop',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Estadisticos',
                path: '/scop/reporte/estadistico',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    }, {
        title: 'Pagos',
        // path: '/scop',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Pago de nomina',
                path: '/scop/pago_nomina',
                icon: <FaIcons.FaCartPlus />
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
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Asistencia',
                path: '/scop/obrero/asistencia',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Registrar',
                path: '/scop/obrero/registrar',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Asistencia asistida',
                path: '/scop/obrero/asistencia_asistida',
                icon: <FaIcons.FaCartPlus />
            },
            {
                title: 'Tablero de conteo',
                path: '/scop/obrero/tablero_conteo',
                icon: <FaIcons.FaCartPlus />
            },
        ]
    },
    {
        title: 'Reportes',
        // path: '/scop',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Estadisticos',
                path: '/scop/reporte/estadistico',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Graficos',
                path: '/scop/reporte/grafico',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Inserción de datos',
        // path: '/scop',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Extracción de producto',
                path: '/scop/extrac_producto',
                icon: <FaIcons.FaCartPlus />
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
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Moneda',
        // path: '/scop',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Lista de monedas',
                path: '/scop/lista_moneda',
                icon: <FaIcons.FaCartPlus />
            },
            {
                title: 'Tasa de cambio',
                path: '/scop/tasa_cambio',
                icon: <FaIcons.FaCartPlus />
            },
        ]
    },
    {
        title: 'Pagos',
        // path: '/scop',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Pago de nomina',
                path: '/scop/pago_nomina',
                icon: <FaIcons.FaCartPlus />
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
    {
        title: 'Inventario',
        path: '/scop/inventario',
        icon: <FaIcons.FaCartPlus />
    },


]