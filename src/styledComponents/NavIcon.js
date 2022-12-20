import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SCREEN_XS_DEVICE = 540

const NavIcon = styled(Link)`
    
    font-size: 2rem;
    height:80px;
    display:flex;
    align-items: center;
    margin-left: 15px;
    
    @media (max-width: 540px) {
        margin-left: 4px;
        font-size: 1rem;
        
    }

`
export default NavIcon