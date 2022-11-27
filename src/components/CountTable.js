import React from 'react'
import { GridContainerCenter } from '../styledComponents/GridContainerCenter'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { H2} from '../styledComponents/Heading'


import { IoMdRemove } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';
import { CountBox } from '../styledComponents/CountBox';
import { CountCard } from '../styledComponents/CountCard';


export const CountTable = ({production, handleMoreLess, singleCount, groupCount, handleCleanSingleCount, handleCleanGroupCount, active}) => {
    return (
        <>
            <GridContainerCenter
                container
                direction="row"
                style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
            >
                {production.map((item, index) => {
                    return (
                        <CountCard key={index} style={{width:"230px"}}>
                            <CardContent>
                                <GridContainerCenter container direction="column">
                                    <H2 textShadow>{item.prod_name}</H2>
                                    <CountBox sx={{ mt: 1, background: "#FFF176" }} onClick={()=> handleCleanSingleCount()}>
                                        <H2>{singleCount[index]?.quantity || 0}</H2>
                                    </CountBox>
                                    <CountBox  sx={{ my: 1, background: "#4FC3F7" }}>
                                        <H2>{item?.quantity || 0}</H2>
                                    </CountBox>
                                    <CountBox sx={{background: "#90A4AE"}}  onClick={()=> handleCleanGroupCount()}>
                                        <H2>{groupCount[index]?.quantity || 0}</H2>
                                    </CountBox>
                                </GridContainerCenter>
                            </CardContent>
                            <CardActions>
                                <GridContainerCenter container>
                                    <GridContainerCenter item>
                                        <Button 
                                            sx={{ fontSize: "25px" }}
                                            onClick={()=> {if(active != true) handleMoreLess(item, -1, item?.quantity || 0)}}>
                                            <IoMdRemove />
                                        </Button>
                                    </GridContainerCenter>
                                    
                                    <GridContainerCenter item justify="flex-end">
                                        <Button 
                                            sx={{ fontSize: "25px" }} 
                                            onClick={()=>{if(active != true) handleMoreLess(item, 1, item?.quantity || 0)}}>
                                            <FiPlus />
                                        </Button>
                                    </GridContainerCenter>
                                </GridContainerCenter>
                            </CardActions>
                        </CountCard>
                    )
                })}
            </GridContainerCenter>
        </>
    )
}

