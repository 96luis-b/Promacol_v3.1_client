import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ReceptionPage from '../../pages/ReceptionPage';

const DispRecepTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ width: '100%', typography: 'body1', height:"calc(100vh - 70px)" }}>
                <TabContext value={value} >
                    <Box sx={{ borderColor: 'divider' }}>
                        <TabList centered onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Proveedor" value="1" />
                            <Tab label="Recepción" value="2" />
                            <Tab label="Despacho" value="3" />
                            <Tab label="Comprobante" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Supplier</TabPanel>
                    <TabPanel value="2">
                        <ReceptionPage/>
                    </TabPanel>
                    <TabPanel value="3">Item Two</TabPanel>
                    <TabPanel value="4">Item Three</TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default DispRecepTabs
