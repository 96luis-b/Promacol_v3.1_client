import React, { useState } from 'react'
import styled from 'styled-components'

const SCREEN_XS_DEVICE = 540

const Nav = styled.div`
    background-image: radial-gradient(circle at 12.5% 87.5% , #00fbff 0, #00dfff 25%, #0cc1ed 50%, #2ea4cc 75%, #388aad 100%);
    opacity: .9;    
    height: 70px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.2);
    width:65px;
    position: absolute;
    border-radius: 30%;
    margin-left: 10px;

    @media (max-width: 540px) {
        height: 30px;
        box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.2);
        width: 25px;
    }
`

export default Nav