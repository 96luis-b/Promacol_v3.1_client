import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const SidebarLink = styled(Link)`
    display:flex;
    color:#091353;
    justify-content: space-between;
    align-items:center;
    padding:20px;
    list-style:none;
    height:40px;
    font-weight:600;
    text-decoration:none;
    font-size: 18px;
    box-shadow: 0px 2px 4px .5px rgba(0, 0, 0, 0.2);

    &:hover{
        background:#F6F6F6;
        border-left:4px solid rgba(34,193,195,1);
        cursor:pointer;
    }
`

export default SidebarLink