import React, { useState } from "react";
import { theme } from "../../../theme";
import TrustedPartnerMenu1 from "./TrustedPartnerMenu1";
import TrustedPartnerMenu2 from "./TrustedPartnerMenu2";
import TrustedPartnerMenu3 from "./TrustedPartnerMenu3";
import TrustedPartnerMenu4 from "./TrustedPartnerMenu4";
import TrustedPartnerMenu5 from "./TrustedPartnerMenu5";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
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


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: '1024px',
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: '600px',
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  const settings_mobile = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "10px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
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
          <Box 
          ml={10} mr={10} mt={5} mb={2} 
          sx={{display:{sm:'block', xs:'block'}, }}
          >
          <Slider {...settings}>
          {items1.map((step, index) => (
          
          <>
       <Box
            sx={{
              display: "flex",
              // flexDirection:{xs:'column',md:'row'},
              justifyContent: "center",
              // border:'1px solid black'
            }}
          >
            <Box
              component="img"
              ml={"1vw"}
              mr={"1vw"}
              sx={{
                // height: 245,
                display: "block",
                maxWidth: {xs:'80%',md:'50%'},
                // minHeight:{xs:'5vw'},
                overflow: "hidden",
                width: "100%",
                borderRadius: "8px  8px 8px 8px",                
              }}
              src={step.image}
              alt={step.alt}
            />
          </Box>
          </>
          
          ))}
          </Slider>
          </Box>
          <Box 
          ml={3} mr={3} mt={5} mb={2} 
          sx={{display:{sm:'none', xs:'none'}, }}
          >
<Slider {...settings_mobile}>
          {items1.map((step, index) => (
          
          <>
       <Box
            sx={{
              display: "flex",
              // flexDirection:{xs:'column',md:'row'},
              justifyContent: "center",
              border:'1px solid black'
            }}
          >
            <img
          src={step.image}
          alt="Logo"
          height={50}
          // style={{ marginLeft: "12px" }}
        />
            {/* <Box
              component="img"
              ml={"1vw"}
              mr={"1vw"}
              sx={{
                // height: 245,
                // display: "block",
                // maxWidth: {sm:'50%'},
                overflow: "hidden",
                width: "100%",
                borderRadius: "8px  8px 8px 8px",
                
              }}
              src={step.image}
              alt={step.alt}
            /> */}
          </Box>
          </>
          
          ))}
          </Slider>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default TrustedPartner;
