import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';


export const TotalCountBox = styled(Box)`
    background: #00dfff;
    width: 270px;
    height: 170px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 5px 8px 5px rgba(204, 209, 209, 1);

    @media (max-width: 540px) {
        width: 80px;
        height: 60px;
        border-radius: 20px;
        box-shadow: 1px 1px 4px 2px rgba(204, 209, 209, 1);
    }

`