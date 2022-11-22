import React, { useState } from "react";
// import "./Sections.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          marginLeft: "3vw",
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
          left: "1.5vw",
          top: "13vh",
          zIndex: 13,
        }}
        onClick={onClick}
      />
    </>
  );
}

const Sections = () => {
  const [items, setItems] = useState(TypeMenu);

  const settings = {
    //   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    draggable: true,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          // infinite: true,
          // dots: false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    // slickNext,
    // slickPrev
  };

  const style = {
    // display: "block",
    display: "block",
    // maxWidth: { md: "22vw" },
    overflow: "hidden",
    borderRadius: "8px  8px 8px 8px",
    // maxHeight: "100vh",
    width: "90%",
    // maxWidth: "1600px",
    objectFit: "cover",
    // borderRadius:'8px',
    // margin:'2%'
  };

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

          <Box
            ml={"1vw"}
            style={{
              // maxWidth: "1600px",
              width: "100%",
            }}
          >
            <Box>
              <Slider {...settings}>
                {items.map((ele) => (
                  <>
                    <Box style={{ position: "relative" }}>
                      <img src={ele.image} style={style} />
                    </Box>
                  </>
                ))}
              </Slider>
            </Box>
          </Box>

          {/* <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items.map((step, index) => (
              <Box key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Box 
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
                            maxWidth: { xs: "90vw", md: "22vw" },
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          src={step.image}
                          alt={step.alt}
                        />
                      </Box>

                      <Box
                        
                        sx={{
                          display: { xs: "none", md: "flex" },
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

                      <Box
                        className="image"
                        sx={{
                          display: { xs: "none", md: "flex" },
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

                      <Box
                        className="image"
                        sx={{
                          display: { xs: "none", md: "flex" },
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
                    </Box>
                  </>
                ) : null}
              </Box>
            ))}
          </AutoPlaySwipeableViews> */}
          {/* <MobileStepper
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
          /> */}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Sections;
