import React,{useState} from 'react'
import { theme } from "../../../theme";
import TypeMenu from './TypeMenu'
import {
    Card,
    Box,
    Grid,
    Table,
    Stack,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
  } from "@mui/material";

const TypeModal = () => {
    const [items, setItems] = useState(TypeMenu);
  return (
    <>
        <Box sx={{display:'flex'}}>
                {
                    items.map(ele=>{
                        return(
                            <>
                            <Box sx={{borderRadius:'8px 0px 0px 8px'}}>
<img  style={{borderRadius:'8px 0px 0px 8px', height:'85vh', width:'55vw'}} src={ele.image} alt={ele.alt}/>                                    
                                </Box>
                            </>
                        );
                    })
                }
        </Box>
    </>
  )
}

export default TypeModal