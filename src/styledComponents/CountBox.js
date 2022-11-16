import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';


export const CountBox = styled(Box)`
    width: 100%;
    height: 4rem;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 5px 1px rgba(204, 209, 209, 1);
`
    // background: ${props => props.tempCount ? "#FFF176" : props.persCount ? "#4FC3F7" : props.totalCount ? "#90A4AE" : "#fff"};
    // ${props => props.primary ? "white" : "palevioletred"};
