import React, { useState } from "react";
import { theme } from "../../../theme";
import "../interior/Interior.css";
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
          <div
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
                        maxWidth: "100vw",
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
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Banner;
