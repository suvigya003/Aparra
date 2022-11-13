import React, { useState } from "react";
import "./Sections.css";
import Slider from "react-slick";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

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

          {/* <Box sx={{border:'1px solid black'}}>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </Box> */}


          {/* <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
             <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <img
                          src="images/type.jpg"
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                        }}
                      >
                        <img
                          src="images/type.jpg"
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                        }}
                      >
                        <img
                          src="images/type.jpg"
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                        }}
                      >
                        <img
                          src="images/type.jpg"
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                    </Box>

                        </div>
              {items.map((step, index) => (
                <>
                  <div class="carousel-item " data-bs-interval="2000">
                    <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <img
                          src={step.image}
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                        }}
                      >
                        <img
                          src={step.image}
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                        }}
                      >
                        <img
                          src={step.image}
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                        }}
                      >
                        <img
                          src={step.image}
                          style={{
                            marginLeft: "1vw",
                            marginRight: "1vw",
                            display: "block",
                            maxWidth: "22vw",
                            overflow: "hidden",
                            width: "100%",
                            borderRadius: "8px  8px 8px 8px",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </Box>
                    </Box>
                    
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

          {/* {items.map((step, index) => (
              <div key={step.label}>
                
                  <>
                    <Box sx={{ display: "flex" }}>
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
               
              </div>
            ))} */}

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
                    <Box sx={{ display: "flex" }}>
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
              </div>
            ))}
          </AutoPlaySwipeableViews>
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
