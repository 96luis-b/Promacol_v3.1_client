import React, { useState, useContext } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { AdminSidebarData, AnalystSidebarData, CashierSidebaData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import NavIcon from '../styledComponents/NavIcon'
import SidebarNav from '../styledComponents/SidebarNav'
import SidebarWrap from '../styledComponents/SidebarWrap'
import MainContext from '../contexts/MainContext'
import { useLocation } from 'react-router'
import Box from '@mui/material/Box';
import Nav from '../styledComponents/Nav'

import LogoutButton from './LogoutButton'
import useAuth from '../contexts/useAuth'


const SidebarData = (user) => {
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
    
    const auth = useAuth()
    const [sidebar, setSidebar] = useState(false)
    const [sidebarData, setSidebarData] = useState(SidebarData(auth.user))
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
                <Nav>
                    <NavIcon to='#'>
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
