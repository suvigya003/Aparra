import React from "react";
import './Footer.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {theme} from '../../theme'
import { Box, Typography, Grid, Link, Button, Divider } from "@mui/material";

const footer = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box mt='10vw' mr="5vw" ml="5vw" mb="3vw">
      <Box mb={3}>
      <Divider  sx={{
        height:'0.3vh',
        width:'90vw',
        bgcolor:'#0006',
        // border:"1px solid black"
      }}/>
      </Box>
    
        <Grid container spacing={"2vw"}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
            <Box
                component="img"
                // ml={'1vw'}
                mb={'1vw'}
                sx={{
                  // height: 245,
                  display: 'block',
                  maxWidth: {md:'10vw',xs:'85px'},
                  overflow: 'hidden',
                  width: '100%',
                  borderRadius:'8px  8px 8px 8px'
                }}
                src='images/Aparra logo.png'
                alt="logo"
              />
            </Box>
            <Box mb='1vw' >
            <Typography sx={{
                fontSize:theme.typography.h7
            }} >Address:</Typography>
            </Box>            
            <Typography sx={{
                fontSize:theme.typography.subtitle2
            }} >
              A13/5 Basement,<br/> Meerut Road Industrial Area, <br/>Ghaziabad, Uttar Pradesh 201003
              
            </Typography>
          </Grid>
         
          <Grid item xs={12} sm={6} md={4}>
            <Box
            
            sx={{
             ml:{md:'7vw',xs:'0'}

            //   border:'1px solid black',
            // display:'flex',
            // flexDirection:'column',
            // alignItems:'center',
            // justifyContent:'center'
          }}
             >
            <Box mb='1vw' >
          <Typography sx={{
            textAlign:'left',
                fontSize:theme.typography.h7
            }}>Quick Links</Typography>          </Box>
          
          <ul>
            <li><a href="#">Modular Kitchen</a></li>
            <li><a href="#">Storage and Wardrobe</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Security Policy</a></li>
            
          </ul>
            </Box>
          
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Box
            //  ml={md:'5vw',xs:'0'}
            sx={{
              ml:{md:'5vw',xs:'0'}
            //   border:'1px solid black',
            // display:'flex',
            // flexDirection:'column',
            // alignItems:'end',
            }}
            >
            <Box mb='1vw'>
          <Typography sx={{
                fontSize:theme.typography.h7
            }}>Social Media</Typography>
          </Box>
          
          <Box mb={2} mt={1} sx={{display:'flex', }}>
            <a href='#'>
            <Box component="img" mr={2}
            sx={{
              // height: 245,
              display: 'block',
              maxWidth: {md:'2vw',xs:'25px'},
              overflow: 'hidden',
              width: '100%',
              borderRadius:'8px  8px 8px 8px'
            }}
              src="images/facebook.png"
            />
            </a>
            <a href='#'>
            <Box component="img" mr={2}
            sx={{
              // height: 245,
              display: 'block',
              maxWidth: {md:'2vw',xs:'25px'},
              overflow: 'hidden',
              width: '100%',
              borderRadius:'8px  8px 8px 8px'
            }}
              src="images/twitter.png"
            />
            </a>
            <a href='#'>
            <Box component="img" mr={2}
            sx={{
              // height: 245,
              display: 'block',
              maxWidth: {md:'2vw',xs:'25px'},
              overflow: 'hidden',
              width: '100%',
              borderRadius:'8px  8px 8px 8px',
            }}
              src="images/pinterest.png"
            />
            </a>
            <a href='#'>
            <Box component="img" 
            sx={{
              // height: 245,
              display: 'block',
              maxWidth: {md:'2vw',xs:'25px'},
              overflow: 'hidden',
              width: '100%',
              borderRadius:'8px  8px 8px 8px'
            }}
              src="images/whatsapp.png"
            />
            </a>
            
        </Box>
            </Box>
          
          </Grid>
          {/* <Grid item  xs={12} sm={6} md={3}>
          <Box mb='1vw'>
          <Typography variant="h7">Current Affairs Subscription</Typography>
          </Box>          
          <Button variant="text" sx={{textAlign:'left', paddingLeft:'0px'}}>Subscribe Now (Get Free Subscription)</Button>
          </Grid> */}
        </Grid>
      </Box>
    </ThemeProvider>
     
    </>
  );
};

export default footer;
