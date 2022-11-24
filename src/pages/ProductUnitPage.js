import React, { useEffect, useState, useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';

import { getProductPrice } from '../api/currency';
import { getExchangeRate, updateProdPrice } from '../api/price';


// function createData(
//   name,
//   calories,
//   fat,
//   carbs,
//   protein,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ProductUnitPage() {

    const [data, setData] = useState([])  
    const [updatePrice, setUpdatePrice] = useState()
    const [currences, setCurrences] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                let resProdPrice = await getProductPrice();
                if(resProdPrice.status != 200) { 
                    console.log(resProdPrice.message); 
                    alert(resProdPrice.message)
                }
                setData(resProdPrice.body)
                let resExchRate = await getExchangeRate();
                if(resExchRate.status != 200) { 
                    console.log(resExchRate.message); 
                    alert(resExchRate.message)
                }
                setCurrences(resExchRate.body)
            } catch (e) {
                alert(e)
            }
        }
        fetchData();
    }, [])

    const handleChange = (i, j, value)=>{
        // console.log("currency: ", currency)
        let newArr = [...data];
        currences.forEach((currency, index)=>{
            if(currency.input_currency != newArr[i].group[j].name.toUpperCase()){
                newArr[i].group[index].price = parseFloat(value / currency.exchange_value).toFixed(2)
            }
        })
        
        newArr[i].group[j].price = value
        setUpdatePrice(newArr[i])  
        setData(newArr);
    }

    const handleSubmit = async()=>{
        try{
            console.log("updatePrice: ", updatePrice)
            let response = await updateProdPrice(updatePrice)
            if(response.status != 200){
                console.log(response.message)
                alert(response.message)
            }
            alert(response.message)
        }catch(error){
            console.log("error: ", error)
            alert("error: ", error)
        }
    }


  return (
    <> 
        <GridContainerCenter sx={{ width: "100%", height: "90vh" }}>
            <GridContainerCenter sx={{ width: "50%", height: "60%" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Productos</TableCell>
                                <TableCell align="Center">Bolivares</TableCell>
                                <TableCell align="Center">Dolar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((rows, i) => (
                            <TableRow
                            key={rows.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {rows.prod_name}
                            </TableCell>
                            {rows.group.map((row, j)=>{
                                return(<TableCell align="Center">
                                    <input style={{width:"30%", border:"none", outline:"none"}} 
                                        onChange={(e)=>{handleChange(i, j, e.target.value)}} 
                                        onKeyPress={(e)=> {if(e.key=="Enter"){handleSubmit()}}}
                                        type="number" 
                                        step="0.01" 
                                        value={row.price}/>
                                </TableCell>)
                            })}
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </GridContainerCenter>
        </GridContainerCenter>
    </>
  );
}


// const ProductUnitPage = () => {
//     return (
//         <>
            // <GridContainerCenter sx={{ width: "100%", height: "90vh" }}>
            //     <GridContainerCenter sx={{ width: "40%", height: "60%" }}>
                
            //     </GridContainerCenter>
            // </GridContainerCenter>
//         </>
//     )
// }

// export default ProductUnitPage
