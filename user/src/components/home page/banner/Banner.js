import React, { useState } from "react";
import { theme } from "../../../theme";
import '../interior/Interior.css'
import BannerMenu from "./BannerMenu";
import BannerStepper from "./BannerStepper";
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
import MobileStepper from "@mui/material/MobileStepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Navbar from "../../navbar/Navbar";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Banner = () => {
  const [items, setItems] = useState(BannerMenu);
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
        <Box mb={5}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >

            {items.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box>
                      {/* <Box
                        component="img"
                        sx={{
                          // height: 245,
                          display: "block",
                          maxHeight: "100vh",
                          maxWidth: "100vw",
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.image}
                        alt={step.alt}
                      /> */}
                      <Box className='bannerAnimation' sx={{ position: "relative" }}>
                      <Box
                          sx={{
                            // top: "30%",
                            // left: "10%",
                            position: "absolute",
                            zIndex: 1,
                          }}
                        >
                        {/* <Navbar/> */}
                        </Box>
                        <Box
                          sx={{
                            top: "30%",
                            left: "10%",
                            position: "absolute",
                            zIndex: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {xs:'25px',md:'4vw' },
                              fontWeight: 600,
                              color: "white",
                              maxHeight:'70vh',
                            }}
                          >
                            {step.title}
                          </Typography>
                        </Box>
                        <Box
                          mt={3}
                          sx={{
                            top: {xs:'35%',md:'40%'},
                            left: "10%",
                            maxWidth: {xs:'70vw',md:'35vw'},
                            position: "absolute",
                            zIndex: 1,
                            wordWrap: "break-word",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {xs:'12px',md:'1.2em' },
                              fontWeight: 400,
                              color: "white",
                              textShadow: "-1px 1px 8px rgba(0, 0, 0, 0.50)",
                            }}
                          >
                            {step.subtitle}
                          </Typography>
                        </Box>
                        <Box
                          mt={3}
                          sx={{
                            top: {xs:'60%',md:'52%'},
                            left: "10%",
                            maxWidth: "35vw",
                            position: "absolute",
                            zIndex: 1,
                          }}
                        >
                          <Button
                            variant="outlined"
                            sx={{
                              color: "white",
                              borderColor: "white",
                              textTransform: "none",
                              // padding:0
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: {xs:'12px',md:'1.2em' },
                                //   color: "white",
                                textShadow: "-1px 1px 6px rgba(0, 0, 0, 0.40)",
                              }}
                            >
                              {step.button}
                            </Typography>
                          </Button>
                        </Box>
                        {/* <Box
                          sx={{
                            top: "70%",
                            left: "10%",
                            position: "absolute",
                            zIndex: 1,
                          }}
                        >
                            <BannerStepper/>  
                            </Box>  */}
                        <img
                          style={{
                            // height: 245,
                            display: "block",
                            maxHeight: "100vh",
                            maxWidth: "100vw",
                            overflow: "hidden",
                            width: "100%",
                          }}
                          src={step.image}
                          alt={step.alt}
                        />
                      </Box>
                    </Box>
                  </>
                ) : null}
              </div>
            ))}     
                  
          </AutoPlaySwipeableViews>
          <MobileStepper
            variant="dots"
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
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Banner;
