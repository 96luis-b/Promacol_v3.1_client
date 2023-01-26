import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CircleIcon from '@mui/icons-material/Circle';
import { H2, H4 } from '../styledComponents/Heading';
import { Box, Grid } from '@mui/material';
import * as GoIcons from 'react-icons/go'
import AddIcon from '@mui/icons-material/Add';
import { addJobProductWorkman, getProductWorkman, getWorkmanJob, removeJobProductWorkman } from '../api/employee';
import ProdJobDialog from '../components/Modals/ProdJobDialog';
import ConfirmDialog from '../components/Modals/ConfirmDialog';


export default function JobPage() {
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [dense, setDense] = useState(true);
    const [jobs, setJobs] = useState([])
    const [data, setData] = useState(null)
    // const [listProd, setListProd] = useState([])
    const [options, setOptions] = useState([])
    const [option, setOption] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                try {
                    let resWorkmanJob = await getWorkmanJob();
                    if (resWorkmanJob.status != 200) { throw new Error('No se ha podido recibir informacion de puestos de trabajo') }
                    setJobs(resWorkmanJob.body)
                } catch (error) {
                    console.error(error)
                }
            } catch (e) {
                alert(e)
            }
        }
        fetchData();
    }, [])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenConfirm = () => {
        setOpen(true);
    };

    const handleCloseConfirm = (confirm) => {
        console.log("confirm: ", confirm)
        setOpen(false);
    };

    const handleChangeJob = (job) => {
        setData(job)
    }

    const handleChangeProd = (item, value) => {
        setOption(`${value}`)
        handleOpenConfirm()
    }

    const handleChangeOptions = async (job) => {
        try {
            let response = await getProductWorkman(job.job_id);
            if (response.status != 200) { throw new Error('No se ha podido recibir informacion de unidades de producción') }
            setOptions(response.body)
        } catch (error) {
            console.error(error)
        }
    }

    const handleAddProdJob = async (job, prod_id) => {
        try {
            let OPTION_ZERO = 0
            if (prod_id == OPTION_ZERO) return alert("Por favor elija una opción")
            let newArr = []
            let arrJobs = jobs
            let job_id = job.job_id
            let resultOption = options.forEach(itemOption => {
                if (itemOption.value == prod_id) {
                    newArr = { prod_id: itemOption.value, prod_name: itemOption.label }
                    job.products.push({ prod_id: itemOption.value, prod_name: itemOption.label })
                    return
                }
            })
            arrJobs.forEach((itemJob, i, listJobs) => {
                if (job_id == itemJob.job_id) {
                    itemJob = job
                    setJobs(listJobs)
                    return
                }
            })
            let response = await addJobProductWorkman({ job_id, prod_id });
            if (response.status != 200) console.error("error: ", response.message)
            let newlistOptions = options.filter(opt => opt.value != option);
            setOption(0)
            setOptions(newlistOptions)
            alert(response.message)
        } catch (error) {
            console.error(error)
        }
    }

    const handleRemoveProdJob = async (job, prod) => {
        try {
            let newListProd = job.products.filter(itemProd => itemProd.prod_id != prod.prod_id);
            job.products = newListProd
            setData(job)
            setOptions([...options, { value: prod.prod_id, label: prod.prod_name }])
            let response = await removeJobProductWorkman({ job_id: job.job_id, prod_id: prod.prod_id });
            if (response.status != 200) console.error("error: ", response.message)
            setOption(0)
            alert(response.message)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container

                    spacing={{ xs: 1, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                    {jobs.map((job, i) => (
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            xs={2} sm={3} md={3} key={i}>
                            <Card sx={{ width: 200 }}>
                                 <CardContent>
                                    <H4>{job.job_name}</H4>
                                    <List
                                        sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}
                                        dense={dense}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        {job.products.map((prod, j) => {
                                            return <ListItemButton key={j}>
                                                <ListItemIcon>
                                                    <GoIcons.GoPrimitiveDot />
                                                </ListItemIcon>
                                                <ListItemText primary={`${prod.prod_name}`} />
                                            </ListItemButton>
                                        })

                                        }
                                    </List>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        sx={{ borderRadius: "50%", width: "10%" }}
                                        variant="contained"
                                        onClick={() => {
                                            handleChangeJob(job)
                                            handleChangeOptions(job)
                                            handleOpen()
                                        }}>
                                        <AddIcon />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {open && <ProdJobDialog
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                data={data}
                handleChange={handleChangeProd}
                option={option}
                options={options}
                handleOpenConfirm={handleOpenConfirm}
                handleAddProdJob={handleAddProdJob}
                handleRemoveProdJob={handleRemoveProdJob}
            />
            }
            {openConfirm && <ConfirmDialog
                open={openConfirm}
                handleOpen={handleOpenConfirm}
                handleClose={handleCloseConfirm}
            />
            }
        </>
    )
}
