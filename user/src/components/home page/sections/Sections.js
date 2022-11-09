import React, { useState } from "react";
import "./Sections.css";
import { theme } from "../../../theme";
import TypeMenu from "../interior/TypeMenu";
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
import { useTheme } from "@mui/material/styles";

import MobileStepper from "@mui/material/MobileStepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Sections = () => {
  const [items, setItems] = useState(TypeMenu);
  // const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const maxSteps = items.length;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box m={5} mb={2} mt={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={2}>
            <Typography
              ml={"1vw"}
              sx={{
                fontSize: theme.typography.h7,
              }}
            >
              Best Selling Kitchens
            </Typography>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/type"
            >
              <Button
                variant="text"
                sx={{
                  color: theme.palette.error.main,
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.subtitle1,
                  }}
                >
                  See All
                  <ArrowForwardIosIcon sx={{ fontSize: "small" }} />
                </Typography>
              </Button>
            </Link>
          </Box>

          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            // onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box sx={{ display: "flex" }}>
                      {/* <Box className="container"> */}
                        {/* <Box className="middle" ml={4} sx={{
                          maxWidth: "22vw",
                        }}>
                          <Typography sx={{
                            color:'white',
                            fontSize: theme.typography.subtitle2,
                            fontWeight:500
                          }}>
                            {step.title}
                          </Typography>
                        </Box> */}
                        <Box
                          className="image"
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            component="img"
                            ml={"1vw"}
                            mr={"1vw"}
                            sx={{
                              display: "block",
                              maxWidth: {xs:'90vw',md:'22vw'},
                              overflow: "hidden",
                              width: "100%",
                              borderRadius: "8px  8px 8px 8px",
                            }}
                            src={step.image}
                            alt={step.alt}
                          />
                        </Box>
                      {/* </Box> */}
                      {/* <Box className="container"> */}
                        
                        <Box
                          className="image"
                          sx={{
                            display:{xs:'none',md:'flex'},
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            component="img"
                            ml={"1vw"}
                            mr={"1vw"}
                            sx={{
                              display: "block",
                              maxWidth: "22vw",
                              overflow: "hidden",
                              width: "100%",
                              borderRadius: "8px  8px 8px 8px",
                            }}
                            src={step.image}
                            alt={step.alt}
                          />
                        </Box>
                      {/* </Box> */}
                      {/* <Box className="container"> */}
                        {/* <Box className="middle" ml={4} sx={{
                          maxWidth: "22vw",
                        }}>
                          <Typography sx={{
                            color:'white',
                            fontSize: theme.typography.subtitle2,
                            fontWeight:500
                          }}>
                            {step.title}
                          </Typography>
                        </Box> */}
                        <Box
                          className="image"
                          sx={{
                            display: {xs:'none',md:'flex'},
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            component="img"
                            ml={"1vw"}
                            mr={"1vw"}
                            sx={{
                              display: "block",
                              maxWidth: "22vw",
                              overflow: "hidden",
                              width: "100%",
                              borderRadius: "8px  8px 8px 8px",
                            }}
                            src={step.image}
                            alt={step.alt}
                          />
                        </Box>
                      {/* </Box> */}
                      {/* <Box className="container"> */}
                        {/* <Box className="middle" ml={4} sx={{
                          maxWidth: "22vw",
                        }}>
                          <Typography sx={{
                            color:'white',
                            fontSize: theme.typography.subtitle2,
                            fontWeight:500
                          }}>
                            {step.title}
                          </Typography>
                        </Box> */}
                        <Box
                          className="image"
                          sx={{
                            display: {xs:'none',md:'flex'},
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            component="img"
                            ml={"1vw"}
                            mr={"1vw"}
                            sx={{
                              display: "block",
                              maxWidth: "22vw",
                              overflow: "hidden",
                              width: "100%",
                              borderRadius: "8px  8px 8px 8px",
                            }}
                            src={step.image}
                            alt={step.alt}
                          />
                        </Box>
                      {/* </Box> */}
                    </Box>
                  </>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            variant="none"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            // sx={{
            //   display:'none'
            // }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />

          {/* <Box>
        <Grid container spacing={3}>
            {
                items.map(ele=>{
                    return(
                        <>
                            <Grid item xs={6} md={3}>
                                <img 
                                style={{
                                    borderRadius: "8px",
                                    height: "20vw",
                                    width: "22vw",
                                  }}
                                src={ele.image} alt={ele.alt}/>
                            </Grid>
                        </>
                    );
                })
            }
        </Grid>
    </Box> */}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Sections;
