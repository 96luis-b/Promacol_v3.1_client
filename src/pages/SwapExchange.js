import React, { useEffect, useState, useContext } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import TextField from '@mui/material/TextField';

import { getExchangeRate, updateExchangeRate } from '../api/price.js'

const SwapExchange = () => {
    const [listExchange, setListExchange] = useState([])
    const [exchange, setExchange] = useState({})


    useEffect(() => {
        async function fetchData() {
            try {
                let response = await getExchangeRate();
                if (response.status != 200) {
                    alert(response.message)
                    return console.error(response.message)
                }
                setExchange(response?.body[0])
                setListExchange(response.body)
            } catch (e) {
                alert(e)
            }
        }
        fetchData();
    }, [])

    const handleChangeData = (value) => {
        setExchange({
            ...exchange,
            ["exchange_value"]: value
        })
    }

    const handleSwap = () => {
        console.log("exchange_id: ", exchange.exchange_id)
        const change = listExchange.filter(e => e.exchange_id !== exchange.exchange_id)
        setExchange(...change)
    };

    const handleSubmit = async() => {
        try {
            let response = await updateExchangeRate(exchange);
            if (response.status != 200) {
                alert(response.message)
                return console.error(response.message)
            }
            setListExchange(response.body)
            alert(response.message)        
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <GridContainerCenter sx={{ width: "100%", height: "90vh" }}>
                <GridContainerCenter sx={{ width: "40%", height: "60%" }}>
                    <Card sx={{ width: "100%" }}>
                        <CardContent>
                            <Grid container
                                direction="column"
                                justifyContent="space-between"
                                alignItems="center">
                                <Grid container
                                    item
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    xs={12}>
                                    <h1>DE {`${exchange.input_currency || "BOLIVAR"}`} </h1>
                                    <TextField style={{ width: "80%" }} autoComplete="off" id="outlined-basic" value={1} variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <SwapVertIcon sx={{ fontSize: 50, my: 4, color: "#0cc1ed" }} onClick={() => handleSwap()} />
                                </Grid>
                                <Grid container
                                    item 
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    xs={12}>
                                    <h1>A {`${exchange?.output_currency || "DOLAR"}`}</h1>
                                    <TextField style={{ width: "80%" }} autoComplete="off" onChange={(e) => handleChangeData(e.target.value)} id="outlined-basic" value={exchange?.exchange_value || 0} variant="outlined" />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions >
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ background: '#0cc1ed', fontSize: "20px" }}
                                onClick={()=>handleSubmit()}>
                                Guardar cambios
                            </Button>
                        </CardActions>
                    </Card>
                </GridContainerCenter>
            </GridContainerCenter >
        </>
    )
}

export default SwapExchange
