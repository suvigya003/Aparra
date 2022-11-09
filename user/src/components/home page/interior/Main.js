import React,{useState} from "react";
import "./Interior.css";
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import { theme } from "../../../theme";
import Menu from './Menu'
// import {CssBaseline} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  // Link,
} from "@mui/material";
import Navbar from "../../navbar/Navbar";
// import kitchen from "../../images/kitchen.png";
// import wardrobe from "../../images/wardrobe.png";
// import crockery from "../../images/crockery.png";
// import chair from "../../images/chair.png";
// import tv_unit from "../../images/tv-unit.png";

const Main = () => {
const [items, setItems] = useState(Menu);
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Navbar/> */}
        <Box mb={5} mt={10}>
        <Box  mb={'4vw'} sx={{display:'flex', justifyContent:'center'}}>
    <Typography variant="h6">
        End-to-end Interior Solutions 
    </Typography>
</Box>
        <Box ml="10vw" mr="10vw" pt={4} sx={{
          background:"url('images/bg1.jpg')",
          minHeight:'50vh',
          maxWidth:'100vw',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        }}>
          <Box >
          <Grid container spacing={2}>
            {
                items.map((ele)=>{
return(
    <>
        <Grid item xs={4} md={12/5}>
              <Box mb={'2vw'} sx={{}}>
                <Link style={{textDecoration:'none', color:'inherit'}} to="/type">
                <Box mb={'1vw'} sx={{ display: "flex", justifyContent: "center", }}>
                <img height="50px" width="50px"
                 src={ele.image} alt={ele.alt} />
                </Box>                
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                  <Typography 
                  // variant="subtitle2"
                  sx={{
                    fontSize:'0.9rem',
                    fontWeight: 400,
                  }}
                  >{ele.title}</Typography>
                </Box>
                </Link>                
              </Box>
            </Grid>
    </>
);
                })
            }
            
            
          </Grid>
          </Box>
          
        </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Main;
