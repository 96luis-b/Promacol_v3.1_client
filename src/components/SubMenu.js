import React, {useState} from 'react'
import SidebarLabel from '../styledComponents/SidebarLabel'
import DropdownLink from '../styledComponents/DropdownLink'
import SidebarLink from '../styledComponents/SidebarLink'

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = ()=> setSubnav(!subnav)

    return (
        <>             
            <SidebarLink to={item?.path || '#'} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                        ? item.iconOpened 
                        : item.subNav 
                        ? item.iconClosed 
                        : null
                    }
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index)=>{
                return (
                    <DropdownLink to={item.path} key={index} >
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu