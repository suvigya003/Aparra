import React, { useState } from "react";
import { theme } from "../../../theme";
import WhyAparraMenu from "./WhyAparraMenu";
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
  Modal,
  ThemeProvider,
} from "@mui/material";

const WhyAparra = () => {
  const [items, setItems] = useState(WhyAparraMenu);
  return (
    <>
      <ThemeProvider theme={theme}>
      <Box pt={5} pb={7} mt={10}
        sx={{
          backgroundColor: "#F7F7F9",
        }}
      >
        <Box >
          <Typography
            sx={{
              fontSize: theme.typography.h6,
              textAlign: "center",
            }}
          >
            Why Aparaa?
          </Typography>
        </Box>
        <Box   sx={{marginLeft:{md:'95px',lg:'160px'}, marginRight:{md:'95px',lg:'160px'}, display: {xs:'none',md:'flex'}, justifyContent: "space-evenly" }} mt={5}>
          {items.map((step, index) => (
            <>
              <Box 
                sx={{
                  // maxWidth:'1600px',
                  // width:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                <img src={step.image} alt={step.alt} height={70} />
                </Box>
                <center>
                <Box mt={1}
                  sx={{
                    maxWidth:'90px',
                    overflowWrap: "break-word",
                    display: "flex",
                    justifyContent:'center'
                  // flexDirection: "column",
                  // alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      margin: "0 0 0 0",
                    }}
                  >
                    {step.text}
                  </Typography>
                </Box>
                </center>
                
              </Box>
            </>
          ))}
        </Box>
        <Box   sx={{display: {xs:'block',md:'none'}, }} mt={5}>
          <Box sx={{display:'flex',justifyContent: "space-evenly" }}>
            <Box 
                sx={{
                  // maxWidth:'1600px',
                  // width:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                <img src='images/idea.png' alt="idea" height={70} />
                </Box>
                <center>
                <Box mt={1}
                  sx={{
                    maxWidth:'90px',
                    overflowWrap: "break-word",
                    display: "flex",
                    justifyContent:'center'
                  // flexDirection: "column",
                  // alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      margin: "0 0 0 0",
                    }}
                  >
                    Exclusive Design
                  </Typography>
                </Box>
                </center>
                
              </Box>
              <Box 
                sx={{
                  // maxWidth:'1600px',
                  // width:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                <img src='images/warranty.png' alt='Unconditional Warranty' height={70} />
                </Box>
                <center>
                <Box mt={1}
                  sx={{
                    maxWidth:'90px',
                    overflowWrap: "break-word",
                    display: "flex",
                    justifyContent:'center'
                  // flexDirection: "column",
                  // alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      margin: "0 0 0 0",
                    }}
                  >
                    Unconditional Warranty
                  </Typography>
                </Box>
                </center>
                
              </Box>
          </Box>
          <Box mt={5} sx={{display:'flex',justifyContent: "space-evenly" }}>
            <Box 
                sx={{
                  // maxWidth:'1600px',
                  // width:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                <img src='images/service.png' alt="Every 4 months Service" height={70} />
                </Box>
                <center>
                <Box mt={1}
                  sx={{
                    maxWidth:'90px',
                    overflowWrap: "break-word",
                    display: "flex",
                    justifyContent:'center'
                  // flexDirection: "column",
                  // alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      margin: "0 0 0 0",
                    }}
                  >
                    Every 4 months Service
                  </Typography>
                </Box>
                </center>
                
              </Box>
              <Box 
                sx={{
                  // maxWidth:'1600px',
                  // width:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                <img src='images/warranty (1).png' alt='Upto 25 years warranty' height={70} />
                </Box>
                <center>
                <Box mt={1}
                  sx={{
                    maxWidth:'90px',
                    overflowWrap: "break-word",
                    display: "flex",
                    justifyContent:'center'
                  // flexDirection: "column",
                  // alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      margin: "0 0 0 0",
                    }}
                  >
                    Upto 25 years warranty
                  </Typography>
                </Box>
                </center>
                
              </Box>
          </Box>
        </Box>
      </Box>
      </ThemeProvider>
      
    </>
  );
};

export default WhyAparra;
