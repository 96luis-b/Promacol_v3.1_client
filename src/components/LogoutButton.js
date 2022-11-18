import React from 'react'
import * as BiIcons from 'react-icons/bi'
import useAuth from "../contexts/useAuth";
import { useNavigate  } from 'react-router-dom';
import SidebarLink from '../styledComponents/SidebarLink'
import SidebarLabel from '../styledComponents/SidebarLabel'

const LogoutButton = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    
    const logout = async() => {
        let response = await auth.logout()
        if(response) navigate('/')
    }

    return (
        <>
            <SidebarLink  to='#' onClick={logout}>
                <div>
                    <BiIcons.BiLogOut />
                    <SidebarLabel>Logout</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default LogoutButton
