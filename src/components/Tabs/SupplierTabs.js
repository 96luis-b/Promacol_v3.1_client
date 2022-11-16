import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ReceptionPage from '../../pages/ReceptionPage';
import { SupplierListTable } from '../Table/SupplierListTable';
import FormRegisterSupplier from '../FormRegisterSupplier';
import FormRegisterVehicle from '../FormRegisterVehicle';

const SupplierTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ width: '100%', typography: 'body1', height: "calc(100vh - 70px)" }}>
                <TabContext value={value} >
                    <Box sx={{ borderColor: 'divider' }}>
                        <TabList centered onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Buscar Proveedor" value="1" />
                            <Tab label="Registrar Proveedor" value="2" />
                            <Tab label="Buscar Vehiculo" value="3" />
                            <Tab label="Registrar Vehiculo" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <SupplierListTable />
                    </TabPanel>
                    <TabPanel value="2">
                        <FormRegisterSupplier />
                    </TabPanel>
                    <TabPanel value="3">
                        <SupplierListTable />
                    </TabPanel>
                    <TabPanel value="4">
                        {/* despues de registrar un vehiculo se desplegara un modal de asignacion de vehiculo a proveedor */}
                        <FormRegisterVehicle /> 
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default SupplierTabs
