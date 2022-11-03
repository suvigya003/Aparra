import React, { useState } from "react";
import { theme } from "../../../theme";
import YouTube from "react-youtube";

import TestimonialsMenu1 from "./TestimonialsMenu1";
import TestimonialsMenu2 from "./TestimonialsMenu2";
import TestimonialsMenu3 from "./TestimonialsMenu3";
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
var getYouTubeID = require("get-youtube-id");

const Testimonials = () => {
  const [id, setId] = useState("");
  const [items1, setItems1] = useState(TestimonialsMenu1);
  const [items2, setItems2] = useState(TestimonialsMenu2);
  const [items3, setItems3] = useState(TestimonialsMenu3);
  // const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (e) => {
    console.log(getYouTubeID(e.target.value));
    setId(getYouTubeID(e.target.value));
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
    height: "300vw",
    width: "350vw",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

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
              Happy Homes by Aparra
            </Typography>
          </Box>
          <Box
            ml={10}
            // mr={10}
            mt={5}
            mb={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
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
                        // ml={8}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Url"
                          variant="outlined"
                          fullWidth
                          // multiline
                          maxRows={4}
                          type="text"
                          name="id"
                          // value={icons.message}
                          onChange={handleChange}
                        />
                        <YouTube
                          videoId={id}
                          opts={opts}
                          sx={{
                            borderRadius:'8px'
                          }}
                          // onReady={this._onReady}
                        />
                        <Typography
                          sx={{
                            fontSize: theme.typography.body1,
                            fontWeight: 500,
                          }}
                        >
                          {step.name}
                        </Typography>
                        <Typography
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
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Url"
                          variant="outlined"
                          fullWidth
                          // multiline
                          maxRows={4}
                          type="text"
                          name="id"
                          // value={icons.message}
                          onChange={handleChange}
                        />
                        <YouTube
                          videoId={id}
                          opts={opts}
                          sx={{
                            borderRadius:'8px'
                          }}
                          // onReady={this._onReady}
                        />
                        <Typography
                          sx={{
                            fontSize: theme.typography.body1,
                            fontWeight: 500,
                          }}
                        >
                          {step.name}
                        </Typography>
                        <Typography
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
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Url"
                          variant="outlined"
                          fullWidth
                          // multiline
                          maxRows={4}
                          type="text"
                          name="id"
                          // value={icons.message}
                          onChange={handleChange}
                        />
                        <YouTube
                          videoId={id}
                          opts={opts}
                          sx={{
                            borderRadius:'8px'
                          }}
                          // onReady={this._onReady}
                        />
                        <Typography
                          sx={{
                            fontSize: theme.typography.body1,
                            fontWeight: 500,
                          }}
                        >
                          {step.name}
                        </Typography>
                        <Typography
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

export default Testimonials;
