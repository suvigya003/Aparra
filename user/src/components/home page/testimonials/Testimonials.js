import React, { useState } from "react";
import { theme } from "../../../theme";
// import './Testimonials.css';
import YouTube from "react-youtube";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import TestimonialsMenu1 from "./TestimonialsMenu1";
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

const style = {
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
var getYouTubeID = require("get-youtube-id");

const Testimonials = () => {
  const [id, setId] = useState("https://youtu.be/JMUJtgzX2ew");
  const [items1, setItems1] = useState(TestimonialsMenu1);
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
        <Box sx={style}>
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
                              {/* <Box sx={{
                                display:{sx:'block',md:'none'}
                              }}>
                                <img
          src={step.image}
          alt="Logo"
          height={500}
          style={{ marginLeft: "12px" }}
        />
                              </Box> */}
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
          </Box>
{/* <Box ml={7}
            mr={5}
            mt={5}
            mb={2}
            sx={{display:{sm:'block',xs:'none'}}}
            >
<Slider {...settings}>
{items.map((step, index) => (
  <>
  <Box m={2}>
  <Box>
                                <Button onClick={handleOpen}>
                                  <Box >
                                    <PlayCircleOutlineOutlinedIcon
                                      sx={{
                                        fontSize: "40px",
                                        position: "absolute",
                                        color: "white",
                                        top: '45%',
                                        left: '45%',
                                        zIndex: 5,
                                      }}
                                    />
                                    <Box
                                    component="img"
                                    sx={{
                                      display: "block",
                                      maxWidth: '100%',
                                      minHeight: {sm:'32vh'},
                                      // maxHeight:'58vh',
                                      objectFit:'cover',
                                      overflow: "hidden",
                                      width: "100%",
                                      borderRadius: "8px",
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
))}
</Slider>
</Box> */}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Testimonials;
