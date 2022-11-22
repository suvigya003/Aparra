import React, { useState } from "react";
import { theme } from "../../../theme";
// import './Testimonials.css';
import YouTube from "react-youtube";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import TestimonialsMenu from "./TestimonialsMenu1";
import TestimonialsMenu2 from "./TestimonialsMenu2";
import TestimonialsMenu3 from "./TestimonialsMenu3";
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
  Modal,
} from "@mui/material";
import TextField from "@mui/material/TextField";
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
  return (<>
  <Box
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
      left:'92.5vw',
      top:'30vh',
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
      left:'3.5vw',
      top:'30vh',
      zIndex: 13,
      
    }} 
    onClick={onClick}
    />
    </>
    
  );
}

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: '80vw',
  height: 500,
  bgcolor: "background.paper",
  borderRadius: "8px",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

var getYouTubeID = require("get-youtube-id");

const Testimonials = () => {
  const [id, setId] = useState("https://youtu.be/JMUJtgzX2ew");
  const [items, setItems] = useState(TestimonialsMenu);
  const [items2, setItems2] = useState(TestimonialsMenu2);
  const [items3, setItems3] = useState(TestimonialsMenu3);
  // const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    console.log(getYouTubeID(e.target.value));
    setId(getYouTubeID(id));
  };


  const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      draggable: true,
      pauseOnHover: false,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      // slickNext,
      // slickPrev
    };

    const style = {
      // sizes:"(min-width: 400px) 80vw, 20vw",
      // display: "block",
      display: "block",
                            // maxWidth: { md: "22vw" },
                            overflow: "hidden",
                            // width: "100%",
                            borderRadius: "8px  8px 8px 8px",
      // height: "60vh",
      width: "90%",
      // maxWidth: "1600px",
      objectFit:'cover',
      // borderRadius:'8px',
      // margin:'2%'
    };


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

  const opts = {
    // marginLeft:'10px',
    borderRadius: "8px",
    height: "500vw",
    width: "950vw",
    playerVars: {
      // size:'https://youtu.be/JMUJtgzX2ew',
      autoplay: 0,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          {/* <TextField
                          id="outlined-multiline-flexible"
                          label="Url"
                          variant="outlined"
                          fullWidth
                          // multiline
                          maxRows={4}
                          type="text"
                          name="id"
                          value={icons.message}
                          onChange={handleChange}
                        /> */}
          <YouTube
            videoId="JMUJtgzX2ew"
            opts={opts}
            sx={{
              borderRadius: "8px",
            }}
            // onReady={_onReady}
          />
        </Box>
      </Modal>
      <ThemeProvider theme={theme}>
        <Box>
          <Box mt={10}>
            <Typography
              sx={{
                fontSize: theme.typography.h6,
                textAlign: "center",
              }}
            >
              Happy Homes by Aparra
            </Typography>
          </Box>
          <Box 
              m={5}
        style={{
          maxWidth:'1600px',
          width: "100%",
        }}
      >
        <Box>
          <Slider {...settings}>
            {items.map((ele) => (
              <>
                <Box style={{position:'relative'}}>
                {/* <Button onClick={handleOpen}> */}
                              <Box mr={2}>
                                <PlayCircleOutlineOutlinedIcon
                                  sx={{
                                    fontSize: "40px",
                                    position: "absolute",
                                    color: "white",
                                    top: {md:'30vh',xs:400},
                                    left: {md:'13vw',xs:400},
                                    zIndex: 5,
                                  }}
                                />
                  <img src={ele.image} style={style} />
                  </Box>
                  {/* </Button> */}
                  <Typography
                            ml={1}
                            sx={{
                              fontSize: theme.typography.body1,
                              fontWeight: 500,
                            }}
                          >
                            {ele.name}
                          </Typography>
                          <Typography
                            ml={1}
                            sx={{
                              fontSize: theme.typography.subtitle2,
                              color: "grey",
                            }}
                          >
                            {ele.size}
                          </Typography>
                          <Box
                            ml={1}
                            mt={2}
                            sx={{
                              maxWidth: "80vw",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: theme.typography.subtitle2,
                              }}
                            >
                              {ele.msg}
                            </Typography>
                            </Box>
                  </Box>
              </>
            ))}
          </Slider>
        </Box>
      </Box>
          {/* <Box
            ml={7}
            mr={5}
            mt={5}
            mb={2}
            // sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Button onClick={handleOpen}>
                              <Box mr={2}>
                                <PlayCircleOutlineOutlinedIcon
                                  sx={{
                                    fontSize: "40px",
                                    position: "absolute",
                                    color: "white",
                                    top: {md:100,xs:400},
                                    left: {md:100,xs:400},
                                    zIndex: 5,
                                  }}
                                />
                                
                                <Box
                                    component="img"
                                    sx={{
                                      display: 'block',
                                      maxWidth: {xs:'90vw',md:'28vw'},
                                      minHeight: {xs:'50vw',md:'28vw'},
                                      overflow: "hidden",
                                      width: "100%",
                                      borderRadius: "8px  8px 8px 8px",
                                    }}
                                    src={step.image}
                                    alt={step.alt}
                                    />
                              </Box>
                            </Button>
                          </Box>

                          <Typography
                            ml={1}
                            sx={{
                              fontSize: theme.typography.body1,
                              fontWeight: 500,
                            }}
                          >
                            {step.name}
                          </Typography>
                          <Typography
                            ml={1}
                            sx={{
                              fontSize: theme.typography.subtitle2,
                              color: "grey",
                            }}
                          >
                            {step.size}
                          </Typography>
                          <Box
                            ml={1}
                            mt={2}
                            sx={{
                              maxWidth: "80vw",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: theme.typography.subtitle2,
                              }}
                            >
                              {step.msg}
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Grid container spacing={0} sx={{ padding: 0 }}>
                <Grid item xs={12} md={4}>
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
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                             
                              <Box>
                                <Button onClick={handleOpen}>
                                  <Box mr={2}>
                                    <PlayCircleOutlineOutlinedIcon
                                      sx={{
                                        fontSize: "40px",
                                        position: "absolute",
                                        color: "white",
                                        top: 175,
                                        left: 175,
                                        zIndex: 5,
                                      }}
                                    />
                                    <Box
                                    component="img"
                                    sx={{
                                      display: "block",
                                      maxWidth: {xs:'90vw',md:'28vw'},
                                      minHeight: {xs:'90vw',md:'28vw'},
                                      overflow: "hidden",
                                      width: "100%",
                                      borderRadius: "8px  8px 8px 8px",
                                    }}
                                    src={step.image}
                                    alt={step.alt}
                                    />
                                  </Box>
                                </Button>
                              </Box>

                              <Typography
                                ml={1}
                                sx={{
                                  fontSize: theme.typography.body1,
                                  fontWeight: 500,
                                }}
                              >
                                {step.name}
                              </Typography>
                              <Typography
                                ml={1}
                                sx={{
                                  fontSize: theme.typography.subtitle2,
                                  color: "grey",
                                }}
                              >
                                {step.size}
                              </Typography>
                              <Box
                                ml={1}
                                mt={2}
                                sx={{
                                  maxWidth: "25vw",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: theme.typography.subtitle2,
                                  }}
                                >
                                  {step.msg}
                                </Typography>
                              </Box>
                            </Box>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                </Grid>
                <Grid item xs={12} md={4}>
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
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box>
                                <Button onClick={handleOpen}>
                                  <PlayCircleOutlineOutlinedIcon
                                    sx={{
                                      fontSize: "40px",
                                      position: "absolute",
                                      color: "white",
                                      top: 175,
                                      zIndex: 5,
                                    }}
                                  />
                                  <Box>
                                    <Box 
                                    component="img"
                                    sx={{
                                      display: "block",
                                      maxWidth: {xs:'90vw',md:'28vw'},
                                      minHeight: {xs:'90vw',md:'28vw'},
                                      overflow: "hidden",
                                      width: "100%",
                                      borderRadius: "8px  8px 8px 8px",
                                    }}
                                    src={step.image}
                                    alt={step.alt}
                                    />
                                  </Box>
                                </Button>
                              </Box>
                              <Typography
                                ml={1}
                                sx={{
                                  fontSize: theme.typography.body1,
                                  fontWeight: 500,
                                }}
                              >
                                {step.name}
                              </Typography>
                              <Typography
                                ml={1}
                                sx={{
                                  fontSize: theme.typography.subtitle2,
                                  color: "grey",
                                }}
                              >
                                {step.size}
                              </Typography>
                              <Box
                                mt={2}
                                sx={{
                                  maxWidth: "25vw",
                                }}
                              >
                                <Typography
                                  ml={1}
                                  sx={{
                                    fontSize: theme.typography.subtitle2,
                                  }}
                                >
                                  {step.msg}
                                </Typography>
                              </Box>
                            </Box>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                </Grid>
                <Grid item xs={12} md={4}>
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
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box>
                                <Button onClick={handleOpen}>
                                  <PlayCircleOutlineOutlinedIcon
                                    sx={{
                                      fontSize: "40px",
                                      position: "absolute",
                                      color: "white",
                                      top: 175,
                                      zIndex: 5,
                                    }}
                                  />
                                  <Box >
                                  <Box 
                                    component="img"
                                    // ml={"1vw"}
                                    // mr={"1vw"}
                                    sx={{
                                      display: "block",
                                      maxWidth: {xs:'90vw',md:'28vw'},
                                      minHeight: {xs:'90vw',md:'28vw'},
                                      overflow: "hidden",
                                      width: "100%",
                                      borderRadius: "8px  8px 8px 8px",
                                    }}
                                    src={step.image}
                                    alt={step.alt}/>
                                  </Box>
                                </Button>
                              </Box>
                              <Typography
                                ml={1}
                                sx={{
                                  fontSize: theme.typography.body1,
                                  fontWeight: 500,
                                }}
                              >
                                {step.name}
                              </Typography>
                              <Typography
                                ml={1}
                                sx={{
                                  fontSize: theme.typography.subtitle2,
                                  color: "grey",
                                }}
                              >
                                {step.size}
                              </Typography>
                              <Box
                                mt={2}
                                sx={{
                                  maxWidth: "25vw",
                                }}
                              >
                                <Typography
                                  ml={1}
                                  sx={{
                                    fontSize: theme.typography.subtitle2,
                                  }}
                                >
                                  {step.msg}
                                </Typography>
                              </Box>
                            </Box>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                </Grid>
              </Grid>
            </Box>
          </Box> */}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Testimonials;
