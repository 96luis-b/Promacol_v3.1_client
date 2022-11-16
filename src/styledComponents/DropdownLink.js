import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const DropdownLink = styled(Link)`
    background: #F6F6F6;
    height: 60px;
    padding-left: 3rem;
    display:flex;
    align-items: center;
    text-decoration: none;
    color: #091353;
    font-weight:600;
    font-size: 18px;

    &:hover{
        background: rgba(0, 223, 255, .6);
        cursor:pointer;
    }
`

export default DropdownLink