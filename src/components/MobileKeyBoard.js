import React, { useState } from 'react'

import Footer from '../styledComponents/Footer';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid } from '@mui/material';

export default function MobileKeyBoard({ handleChangeKeyBoard, handleSubmit, handleChangeRemove }) {
    return (
        <Footer>
            <Grid
                sx={{marginBottom:"10px"}}
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid
                    item
                    xs={8}>
                    <Grid xs={12}>
                        <ButtonGroup variant="contained" sx={{ width: "90%", height:"50px" }}>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(0)}>0</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(1)}>1</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(2)}>2</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(3)}>3</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(4)}>4</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid xs={12}>
                        <ButtonGroup variant="contained" sx={{ width: "90%", height:"50px"  }}>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(5)}>5</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(6)}>6</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(7)}>7</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(8)}>8</Button>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={() => handleChangeKeyBoard(9)}>9</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <ButtonGroup
                        sx={{ height:"100%"  }}
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="contained"
                    >
                        <Button sx={{ width: "100%", height: "100%" }} key="send" onClick={() => handleSubmit()}>Send</Button>
                        <Button sx={{ width: "100%", height: "100%" }} key="del" onClick={() => handleChangeRemove()}>Del</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Footer>
    )
}