import React,{useState, useEffect} from "react";
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
import axios from 'axios'
import Navbar from "../../navbar/Navbar";
// import kitchen from "../../images/kitchen.png";
// import wardrobe from "../../images/wardrobe.png";
// import crockery from "../../images/crockery.png";
// import chair from "../../images/chair.png";
// import tv_unit from "../../images/tv-unit.png";

const Main = () => {
const [items, setItems] = useState(Menu);

const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getCategoryData = async () => {
      try{
        const {data} = await axios.get('http://localhost:8080/api/aparra/getCategory');
        setCategoryData(data);
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    getCategoryData();
  }, []);

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
          // background:"url('images/bg1.jpg')",
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
                categoryData.map((ele)=>{
return(
    <>
        <Grid item xs={4} md={4}>
              <Box mb={'2vw'} sx={{}}>
                <Link style={{textDecoration:'none', color:'inherit'}} to="/type">
                <Box mb={'1vw'} sx={{ display: "flex", justifyContent: "center", }}>
                {/* <img height="50px" width="50px"
                 src={ele.image} alt={ele.alt} /> */}
                 <img
          src={ele.image}
          alt="icons"
          height={50}
      
        />
                </Box>                
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                  <Typography 
                  // variant="subtitle2"
                  sx={{
                    fontSize:'14px',
                    fontWeight: 400,
                  }}
                  >{ele.name}</Typography>
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
