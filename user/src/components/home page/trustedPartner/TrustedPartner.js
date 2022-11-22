import React, { useState } from "react";
import { theme } from "../../../theme";
import './TrustedPartner.css'
import TrustedPartnerMenu1 from "./TrustedPartnerMenu1";
import TrustedPartnerMenu2 from "./TrustedPartnerMenu2";
import TrustedPartnerMenu3 from "./TrustedPartnerMenu3";
import TrustedPartnerMenu4 from "./TrustedPartnerMenu4";
import TrustedPartnerMenu5 from "./TrustedPartnerMenu5";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <Box
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          opacity: "70%",
          zIndex: 10,
          marginRight: "5vw",
          height: "45px",
          width: "45px",
          borderRadius: "20%",
        }}
        onClick={onClick}
      />

      <img
        src="images/right-arrow.png"
        height={35}
        style={{
          position: "absolute",
          left: "87vw",
          top: "13vh",
          zIndex: 13,
        }}
        onClick={onClick}
      />
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <Box
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          opacity: "70%",
          zIndex: 10,
          marginLeft: "5vw",
          height: "45px",
          width: "45px",
          borderRadius: "20%",

          // height: '40px',
          // width: '40px',
        }}
        onClick={onClick}
      />
      <img
        src="images/left-arrow.png"
        height={35}
        style={{
          position: "absolute",
          left: "4%",
          top: "13vh",
          zIndex: 13,
        }}
        onClick={onClick}
      />
    </>
  );
}

const TrustedPartner = () => {
  const [items, setItems] = useState(TrustedPartnerMenu1);
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

  const maxSteps = items.length;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: "1024px",
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: "850px",
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };
  const settings_mobile = {
    // className: "center",
    // centerMode: true,
    // infinite: false,
    // centerPadding: "10px",
    // slidesToShow: 1,
    // speed: 500,
    // rows: 2,
    // slidesPerRow: 2,
    className: "center",
    dots: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 5,
    // slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
      centerMode: true,
      // infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      rows: 1,
      slidesPerRow: 2
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Box mt={10}>
            <Typography
              sx={{
                fontSize: theme.typography.h6,
                textAlign: "center",
              }}
            >
              Our Trusted Partners
            </Typography>
          </Box>
          <Box
            ml={10}
            mr={10}
            mt={5}
            mb={2}
            sx={{ display: { sm: "block", xs: "none" },  }}
          >
             <Box>
                    <Slider {...settings}>
                      {items.map((ele) => (
                        <>
                          <Box sx={{ position: "relative", display:'flex',justifyContent:'center' }}>
                            <img src={ele.image} height={60}
                            //  style={style} 
                            />
                          </Box>
                        </>
                      ))}
                    </Slider>
                  </Box>
          </Box>
          <Box
            ml={3}
            mr={3}
            mt={5}
            mb={15}
            sx={{ display: { sm: "none", xs: "content" } }}
          >
            <Slider {...settings_mobile}>
              {items.map((step, index) => (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      // flexDirection:{xs:'column',md:'row'},
                      justifyContent: "center",
                      // border: "1px solid black",
                    }}
                  >
                    <img
                      src={step.image}
                      alt="Logo"
                      height={36}
                      // style={{ marginLeft: "12px" }}
                    />
                    
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
