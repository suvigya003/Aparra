import React, { useState } from "react";
import { theme } from "../../../theme";
import TrustedPartnerMenu1 from "./TrustedPartnerMenu1";
import TrustedPartnerMenu2 from "./TrustedPartnerMenu2";
import TrustedPartnerMenu3 from "./TrustedPartnerMenu3";
import TrustedPartnerMenu4 from "./TrustedPartnerMenu4";
import TrustedPartnerMenu5 from "./TrustedPartnerMenu5";
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

const TrustedPartner = () => {
  const [items1, setItems1] = useState(TrustedPartnerMenu1);
  const [items2, setItems2] = useState(TrustedPartnerMenu2);
  const [items3, setItems3] = useState(TrustedPartnerMenu3);
  const [items4, setItems4] = useState(TrustedPartnerMenu4);
  const [items5, setItems5] = useState(TrustedPartnerMenu5);
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

  const maxSteps = items1.length;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Box mt={10}>
            <Typography sx={{
              fontSize:theme.typography.h6,
              textAlign:'center'
            }}>
              Our Trusted Partners
            </Typography>
          </Box>
          <Box ml={10} mr={10} mt={5} mb={2} sx={{display:'flex', justifyContent:'space-between', }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items1.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        // flexDirection:{xs:'column',md:'row'},
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        component="img"
                        ml={"4vw"}
                        mr={"1vw"}
                        sx={{
                          // height: 245,
                          display: "block",
                          maxWidth: {xs:'30vw',md:'10vw'},
                          overflow: "hidden",
                          width: "100%",
                          borderRadius: "8px  8px 8px 8px",
                          
                        }}
                        src={step.image}
                        alt={step.alt}
                      />
                    </Box>
                  </>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items2.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box
                      sx={{
                        display: {xs:'none',md:'flex'},
                        // flexDirection:{xs:'column',md:'row'},
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        component="img"
                        ml={"1vw"}
                        mr={"1vw"}
                        sx={{
                          // height: 245,
                          display: "block",
                          maxWidth: "10vw",
                          overflow: "hidden",
                          width: "100%",
                          borderRadius: "8px  8px 8px 8px",
                        }}
                        src={step.image}
                        alt={step.alt}
                      />
                    </Box>
                  </>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items3.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box
                      sx={{
                        display: {xs:'none',md:'flex'},
                        // flexDirection:{xs:'column',md:'row'},
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        component="img"
                        ml={"1vw"}
                        mr={"1vw"}
                        sx={{
                          // height: 245,
                          display: "block",
                          maxWidth: "10vw",
                          overflow: "hidden",
                          width: "100%",
                          borderRadius: "8px  8px 8px 8px",
                        }}
                        src={step.image}
                        alt={step.alt}
                      />
                    </Box>
                  </>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items4.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box
                      sx={{
                        display: {xs:'none',md:'flex'},
                        // flexDirection:{xs:'column',md:'row'},
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        component="img"
                        ml={"1vw"}
                        mr={"1vw"}
                        sx={{
                          // height: 245,
                          display: "block",
                          maxWidth: "10vw",
                          overflow: "hidden",
                          width: "100%",
                          borderRadius: "8px  8px 8px 8px",
                        }}
                        src={step.image}
                        alt={step.alt}
                      />
                    </Box>
                  </>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items5.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        // flexDirection:{xs:'column',md:'row'},
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        component="img"
                        ml={"1vw"}
                        mr={"1vw"}
                        sx={{
                          // height: 245,
                          display: "block",
                          maxWidth: {xs:'30vw',md:'10vw'},
                          overflow: "hidden",
                          width: "100%",
                          borderRadius: "8px  8px 8px 8px",
                        }}
                        src={step.image}
                        alt={step.alt}
                      />
                    </Box>
                  </>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          </Box>
          
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

export default TrustedPartner;
