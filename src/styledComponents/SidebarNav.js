import React from 'react'
import styled from 'styled-components'

const SidebarNav = styled.nav`
    background: #fff;
    width:250px;
    height:100vh;
    display:flex;
    justify-content:center;
    position:fixed;
    top:0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition:350ms;
    z-index:1000;
    box-shadow: 4px 0px 15px 1px rgba(0, 0, 0, 0.2);
`
export default SidebarNav