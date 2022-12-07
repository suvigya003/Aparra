import React, { useState,useEffect } from "react";
import { theme } from "../../../theme";
import "../category/Interior.css";
import BannerMenu from "./BannerMenu";
import BannerStepper from "./BannerStepper";
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
import MobileStepper from "@mui/material/MobileStepper";
import axios from 'axios'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Navbar from "../../navbar/Navbar";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (<>
  <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        opacity:'70%',
        zIndex: 10,
        marginRight: "5vw",
      height: '45px',
      width: '45px',
      borderRadius:'20%',
      }}
      onClick={onClick}
    />
    
    <img src='images/right-arrow.png' height={35} style={{
      position:'absolute',
      left:'94%',
      top:'47vh',
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
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        opacity:'70%',
        zIndex: 10,
        marginLeft: "5vw",
      height: '45px',
      width: '45px',
      borderRadius:'20%',
        
      // height: '40px',
      // width: '40px',
      }}
      onClick={onClick}
    />
    <img src='images/left-arrow.png' height={35} style={{
      position:'absolute',
      left:'3.5%',
      top:'47vh',
      zIndex: 13,
      
    }} 
    onClick={onClick}
    />
    </>
    
  );
}

const Banner = () => {
  const [items, setItems] = useState(BannerMenu);

  const [bannerTable, setBannerTable] = useState([]);

  useEffect(() => {
    const getBannerTableData = async () => {
      try{
        const {data} = await axios.get('http://localhost:8080/api/aparra/getBanner');
        setBannerTable(data);
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    getBannerTableData();
  }, []);
  console.log(bannerTable);

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


  const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      draggable: true,
      pauseOnHover: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // slickNext,
      // slickPrev
    };

    const arrayData = [
      {
        image: "images/banner1.jpg",
        title:"Modular Kitchen",
        subtitle:"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        button: "Buy this Template",
        color:'white'
      },
      {
        image: "images/banner2.jpg",
        title:"Storage and Wardrobe",
        subtitle:"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        button: "Buy this Template",
        color:'#A05C37'
      },
      {
        image: "images/banner3.jpg",
        title:"Living Room",
        subtitle:"Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        button: "Get Inspired",
        color:'white'
      },
    ];

    const style = {
      // display: "block",
      maxHeight: "100vh",
      width: "100%",
      // maxWidth: "1300px",
      objectFit:'cover',
    };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box mb={5}>
        <div
        style={{
          maxWidth:'1600px',
          width: "100%",
        }}
      >
        <div>
          <Slider {...settings}>
            {bannerTable.map((ele) => (
              <>
                <div style={{position:'relative'}}>
                <Box
                      sx={{
                        top: "30%",
                        left: "10%",
                        position: "absolute",
                        zIndex: 10,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "25px", md: "4vw" },
                          fontWeight: 600,
                          color: "white",
                          maxHeight: "70vh",
                        }}
                      >
                        {ele.title}
                      </Typography>
                    </Box>
                    <Box
                      mt={3}
                      sx={{
                        top: { xs: "35%", md: "40%" },
                        left: "10%",
                        maxWidth: { xs: "70vw", md: "35vw" },
                        position: "absolute",
                        zIndex: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "1.2em" },
                          fontWeight: 400,
                          color: "white",
                          textShadow: "-1px 1px 8px rgba(0, 0, 0, 0.50)",
                        }}
                      >
                        {ele.subtitle}
                      </Typography>
                    </Box>
                    <Box
                      mt={3}
                      sx={{
                        top: { xs: "60%", md: "52%" },
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
                            fontSize: { xs: "12px", md: "1.2em" },
                            //   color: "white",
                            textShadow: "-1px 1px 6px rgba(0, 0, 0, 0.40)",
                          }}
                        >
                          {ele.buttonText}
                        </Typography>
                      </Button>
                    </Box>
                  <img src={ele.image} style={style} />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
          {/* <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
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
                          fontSize: { xs: "25px", md: "4vw" },
                          fontWeight: 600,
                          color: "white",
                          maxHeight: "70vh",
                        }}
                      >
                        Modular Kitchen
                      </Typography>
                    </Box>
                    <Box
                      mt={3}
                      sx={{
                        top: { xs: "35%", md: "40%" },
                        left: "10%",
                        maxWidth: { xs: "70vw", md: "35vw" },
                        position: "absolute",
                        zIndex: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "1.2em" },
                          fontWeight: 400,
                          color: "white",
                          textShadow: "-1px 1px 8px rgba(0, 0, 0, 0.50)",
                        }}
                      >
                        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                      </Typography>
                    </Box>
                    <Box
                      mt={3}
                      sx={{
                        top: { xs: "60%", md: "52%" },
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
                            fontSize: { xs: "12px", md: "1.2em" },
                            //   color: "white",
                            textShadow: "-1px 1px 6px rgba(0, 0, 0, 0.40)",
                          }}
                        >
                          Buy this Template
                        </Typography>
                      </Button>
                    </Box>
                <img src="images/banner1.jpg"  style={{
                        // height: 245,
                        display: "block",
                        maxHeight: "100vh",
                        maxWidth: "100vw",
                        overflow: "hidden",
                        width: "100%",
                      }} class="d-block w-100" alt="..." />
              </div>
              {items.map((step, index) => (
                <>
                  <div class="carousel-item " data-bs-interval="2000">
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
                          fontSize: { xs: "25px", md: "4vw" },
                          fontWeight: 600,
                          color: "white",
                          maxHeight: "70vh",
                        }}
                      >
                        {step.title}
                      </Typography>
                    </Box>
                    <Box
                      mt={3}
                      sx={{
                        top: { xs: "35%", md: "40%" },
                        left: "10%",
                        maxWidth: { xs: "70vw", md: "35vw" },
                        position: "absolute",
                        zIndex: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "1.2em" },
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
                        top: { xs: "60%", md: "52%" },
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
                            fontSize: { xs: "12px", md: "1.2em" },
                            //   color: "white",
                            textShadow: "-1px 1px 6px rgba(0, 0, 0, 0.40)",
                          }}
                        >
                          {step.button}
                        </Typography>
                      </Button>
                    </Box>
                    <img  
                    style={{
                        // height: 245,
                        display: "block",
                        maxHeight: "100vh",
                        maxWidth: "1600px",
                        width:'100%',
                        overflow: "hidden",
                        width: "100%",
                      }}
                    src={step.image} class="d-block w-100" alt="..." />
                    
                  </div>
                </>
              ))}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Banner;
