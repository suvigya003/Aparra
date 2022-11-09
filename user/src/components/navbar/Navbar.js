import React, { useState, useEffect } from "react";
import { theme } from "../../theme";
import "./Navbar.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [shown, setShown] = useState(false);
  // const changeColor=()=>{
  //   if(window.scrollY===90){
  //     setColor(true)
  //   }
  //   else setColor(false)
  // }

  // window.addEventListener('scroll',changeColor)

  useEffect(() => {
    const changeColor = () => {
      // if(window.scrollY==90)
      if (
        document.body.scrollTop >= 200 ||
        document.documentElement.scrollTop >= 200
      ) {
        setColor(true);
        console.log("top");
      } else {
        setColor(false);
        console.log("bottom");
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box 
          // className={color ? "header-bg" : "header"}
          className={color ? "header-bg" : "header"}
            p={1}
            // fullWidth
            position="fixed"
          sx={{ maxWidth:'100%', display: {md:"flex",xs:'none'}, justifyContent:'center',alignItems:'center', }}
        >
          <Box >
            <Box
              component="img"
              // ml={'1vw'}
              // mb={"1vw"}
              m={1}
              sx={{
                // height: 245,
                display: "block",
                maxWidth: "14vw",
                overflow: "hidden",
                width: "100%",
                borderRadius: "8px  8px 8px 8px",
              }}
              src="images/Aparra logo.png"
              alt="logo"
            />
          </Box>
          <Box ml={'32vw'} sx={{
            flexGrow:1
          }}/>
          <Box
            // fullWidth
            sx={{
              height: "200",
              width: "100%",
              // display: "flex",
              // justifyContent: "end",
              // border:'1px solid black'
            }}
          >
            <Box
              // fullWidth
              sx={{
                // border:'1px solid black',
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box m={1} >
                <Typography
                  className={color ? "header-bg" : "header"}
                  sx={{
                    fontSize: theme.typography.h1,
                    // color: `${color} ? white : black `,
                  }}
                >
                  Design Gallery
                </Typography>
              </Box>
              <Box m={1} >
                <Typography
                  className={color ? "header-bg" : "header"}
                  sx={{
                    fontSize: theme.typography.h1,
                  }}
                >
                  Modular Kitchen
                </Typography>
              </Box>
              <Box m={1} >
                <Typography
                  className={color ? "header-bg" : "header"}
                  sx={{
                    fontSize: theme.typography.h1,
                  }}
                >
                  Bedroom
                </Typography>
              </Box>
              <Box m={1} >
                <Typography
                  className={color ? "header-bg" : "header"}
                  sx={{
                    fontSize: theme.typography.h1,
                  }}
                >
                  Living Room
                </Typography>
              </Box>
              <Box m={1} >
                <Typography
                  className={color ? "header-bg" : "header"}
                  sx={{
                    fontSize: theme.typography.h1,
                  }}
                >
                  Bathroom
                </Typography>
              </Box>
              <Box m={1} >
                <Typography
                  className={color ? "header-bg" : "header"}
                  sx={{
                    fontSize: theme.typography.h1,
                  }}
                >
                  Space Saving Furniture
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={color ? "header-bg" : "header"} position="fixed" sx={{display:{xs:'block',md:'none'}}}>
        
        <Box 
          // className={color ? "header-bg" : "header"}
          className={color ? "header-bg" : "header"}
            p={1}
            // fullWidth
            
          sx={{ minWidth:'100vw', display: {xs:"flex"}, justifyContent:'space-between',alignItems:'center', }}
        >
          <Box >
            <Box
              component="img"
              // ml={'1vw'}
              // mb={"1vw"}
              m={1} ml={2}
              sx={{
                // height: 245,
                display: "block",
                maxWidth: "85px",
                overflow: "hidden",
                width: "100%",
                borderRadius: "8px  8px 8px 8px",
              }}
              src="images/Aparra logo.png"
              alt="logo"
            />
          </Box>
          {/* <Box ml={'70vw'} sx={{
            flexGrow:1
          }}/> */}
          <Box sx={{right:0}}>
            <Button sx={{padding:0}} onClick={()=>{
              setShown(!shown);
            }}>
            <MenuIcon/>
            </Button>
          </Box>       
        </Box>
        </Box>
        {
          shown?(
            <Box sx={{display:'flex',justifyContent:'right'}}>
            <Box mt='70px' pl={'2vw'} className={color ? "header-list-bg" : "header"}minWidth='40vw'  sx={{display:'flex', flexDirection:'column',justifyContent:'right',borderRadius:'0px 0px 8px 8px'}} position="fixed">
            <ul>
               <Box mt={'3vh'}>
               <li><a href="#">Design Gallery</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Modular Kitchen</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Bedroom</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Living Room</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Bathroom</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Space Living Furniture</a></li>
                </Box> 
    
              </ul>
            </Box>
            </Box>
          ):null
        }
       
        
      </ThemeProvider>
    </>
  );
};

export default Navbar;
