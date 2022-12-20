import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import styled from 'styled-components'

const SCREEN_XS_DEVICE = 540

export const PersonCircleIcon = styled(BsPersonCircle)`
 font-size: 12rem;
 color: #00dfff; 

 @media (max-width: 540px) {
    font-size: 4rem;
}
`




