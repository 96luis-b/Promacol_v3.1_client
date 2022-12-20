import React from 'react'
import styled from 'styled-components'

export const SH1 = styled.h1`
  font-size:80px;
  font-weight: 700;
  margin: 0 0;
`

export const H1 = styled.h1`
  font-size:45px;
  font-weight: 700;
  margin: 0 0;
`

export const H2 = styled.h1`
  font-size:40px;
  font-weight: 700;
  margin: 0 0;
  text-align: ${props => props.center ? "center" : null};
  text-shadow: ${props => props.textShadow ? "3px 4px 5px rgba(204, 209, 209, 1)" : null}
`
export const H3 = styled.h1`
  font-size:32px;
  font-weight: 700;
  margin: 0 0;
  text-align: ${props => props.center ? "center" : null};
`
export const H4 = styled.h1`
  font-size:25px;
  font-weight: 700;
  margin: 0 0;
`
export const H5 = styled.h1`
  font-size:20px;
  font-weight: 700;
  margin: 0 0;
`

