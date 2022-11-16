import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { AdminSidebarData, AnalystSidebarData, CashierSidebaData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import MenuIconBox from '../styledComponents/MenuIconBox'
import NavIcon from '../styledComponents/NavIcon'
import SidebarNav from '../styledComponents/SidebarNav'
import SidebarWrap from '../styledComponents/SidebarWrap'
import SearchInput from '../styledComponents/SearchInput'
import MainContext from '../contexts/MainContext'
import { useLocation } from 'react-router'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuCountBoard from './MenuCountBoard'
import Nav from '../styledComponents/Nav'
import { GridContainerCenter } from '../styledComponents/GridContainerCenter'

import LogoutButton from './LogoutButton'
import FormControl from '@mui/material/FormControl';
import useAuth from '../contexts/useAuth'
import { useHistory } from 'react-router-dom';

// obtener menu de componente SidebarData
// pasarle un parametro, para obtener un menu determinado 
// const sidebarDataInit = {}

const SidebarData = () => {
    const auth = useAuth()
    const user = JSON.parse(JSON.stringify(auth.user))
    let data;
    switch (user.role[0]) {
        case 1:
            data = AdminSidebarData
            break;
        case 2:
            data = AnalystSidebarData
            break;
        case 3:
            data = CashierSidebaData
            break;
        default:
            console.log('');
    }
    return data
}


const Sidebar = () => {
    const history = useHistory();
    const auth = useAuth()
    const [sidebar, setSidebar] = useState(false)
    // const [sidebarData, setSidebarData] = useState([AdminSidebarData])
    const [sidebarData, setSidebarData] = useState(SidebarData)
    const showSidebar = () => setSidebar(!sidebar)
    let location = useLocation();
    const { switchSearch } = useContext(MainContext)
    let search = switchSearch(location.pathname)

    const [id, setId] = useState("")

    const handleChange = (value) => {
        setId(value)
    }

    return <>
        <Box sx={{ p: 1, m: 1 }}>
            <IconContext.Provider value={{ color: '#000' }}>
                <Nav sx={{ marginLeft: "10px" }}>
                    <NavIcon to='#' style={{ marginLeft: "15px" }}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {sidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />
                        })}
                        <LogoutButton />
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </Box>
    </>
}



export default Sidebar
