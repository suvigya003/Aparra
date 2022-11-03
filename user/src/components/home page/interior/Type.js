import React, { useState } from "react";
import { theme } from "../../../theme";
import "./Interior.css";
import TypeMenu from "./TypeMenu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Card,
  Box,
  Grid,
  Table,
  Stack,
  Avatar,
  Button,
  Divider,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Modal from "@mui/material/Modal";
import { borderRadius } from "@mui/system";
import TypeModal from "./TypeModal";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// var rows = [], i = 0, len = 21;
//   while (++i <= len) rows.push({
//     image:"images/type.jpg",
//         alt:"kitchen",
//   });

// const themes = createTheme({
//   root:{
//     MuiGridItem:{
//       paddingLeft:0
//     }
//   }
// });

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "85vh",
  width: "95vw",
  // bgcolor: 'background.paper',
  bgcolor: "black",
  borderRadius: "8px",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  pt: 0,
  pr: 0,
};

const Type = () => {
  const [items, setItems] = useState(TypeMenu);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Button onClick={handleClose} sx={{ pl: 15, pt: 1, pr: 2 }}>
              <CloseIcon sx={{ color: "white" }} />
            </Button>
          </Box>
          <Box sx={style}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ borderRadius: "8px 0px 0px 8px", maxWidth: "55vw" }}>
                {/* <img
                    style={{
                      borderRadius: "8px 0px 0px 8px",
                      height: "85vh",
                      width: "55vw",
                    }}
                    src='images/type.jpg'
                  /> */}
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  // onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {items.map((step, index) => (
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
                              // ml={"1vw"}
                              // mr={"1vw"}
                              sx={{
                                height: "85vh",
                                display: "block",
                                maxWidth: "55vw",
                                overflow: "hidden",
                                width: "100%",
                                borderRadius: "8px  0px 0px 8px",
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
                <MobileStepper
                  sx={{
                    bgcolor: "transparent",
                  }}
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
                      sx={{ color: "white" }}
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
                      sx={{ color: "white" }}
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
              <Box
                className="modall"
                sx={{ overflowY: "scroll", height: "85vh" }}
              >
                <Box
                  ml={3}
                  p={4}
                  sx={{
                    borderRadius: "0px 8px 8px 0px",
                    bgcolor: "background.paper",
                  }}
                >
                  <Box mb={2}>
                    <Typography
                      sx={{
                        fontSize: theme.typography.h5,
                      }}
                    >
                      Glia Straight Wardrobe Design Magellan Vintage and Nova
                      Grey
                    </Typography>
                  </Box>

                  {/* <Box mb={3}>
<Button fullWidth variant="contained" sx={{
    bgcolor:theme.palette.error.main,
    borderRadius:'8px',
    p:'14px 15px'
}}>
    <Typography sx={{
        fontSize:theme.typography.h4
    }}>
    Book Free Design Session 
    </Typography>
    </Button>
</Box>

<Box>
<Button variant="outlined" fullWidth sx={{
    // bgcolor:theme.palette.error.main,
    color:'black',
    borderRadius:'8px',
    p:'12px 15px'
}}>
    <FavoriteBorderOutlinedIcon/>
    <Typography sx={{
        fontSize:theme.typography.h3
    }}>
    Wishlist
    </Typography>
    </Button>
</Box> */}

                  <Typography
                    mb={2}
                    sx={{
                      fontSize: theme.typography.body2,
                      color: "grey",
                    }}
                  >
                    Add a dash of robustness and life to your living room with
                    this nature-inspired wooden and stone More
                  </Typography>

                  <Divider variant="middle" sx={{ bgcolor: "#DDDDDD" }} />
                  <Typography
                    mt={2}
                    sx={{
                      fontSize: theme.typography.h8,
                      // color:'grey'
                    }}
                  >
                    Specification
                  </Typography>
                  <Box sx={{ display: "flex" }} mb={2}>
                    <Typography sx={{ fontSize: theme.typography.body2 }}>
                      Size | &nbsp;
                    </Typography>
                    <Typography sx={{ fontSize: theme.typography.body2 }}>
                      8
                    </Typography>
                  </Box>
                  <Divider variant="middle" sx={{ bgcolor: "#DDDDDD" }} />
                  <Typography
                    mt={2}
                    sx={{
                      fontSize: theme.typography.h8,
                      // color:'grey'
                    }}
                  >
                    Share this Design
                  </Typography>
                  <Box mb={2} mt={1} sx={{ display: "flex" }}>
                    <Box
                      component="img"
                      mr={2}
                      sx={{
                        // height: 245,
                        display: "block",
                        maxWidth: "2vw",
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: "8px  8px 8px 8px",
                      }}
                      src="images/facebook.png"
                    />
                    <Box
                      component="img"
                      mr={2}
                      sx={{
                        // height: 245,
                        display: "block",
                        maxWidth: "2vw",
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: "8px  8px 8px 8px",
                      }}
                      src="images/twitter.png"
                    />
                    <Box
                      component="img"
                      mr={2}
                      sx={{
                        // height: 245,
                        display: "block",
                        maxWidth: "2vw",
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: "8px  8px 8px 8px",
                      }}
                      src="images/pinterest.png"
                    />
                    <Box
                      component="img"
                      sx={{
                        // height: 245,
                        display: "block",
                        maxWidth: "2vw",
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: "8px  8px 8px 8px",
                      }}
                      src="images/whatsapp.png"
                    />
                  </Box>
                  <Divider variant="middle" sx={{ bgcolor: "#DDDDDD" }} />
                  <Typography
                    mt={2}
                    mb={1}
                    sx={{
                      fontSize: theme.typography.h8,
                    }}
                  >
                    Related Designs
                  </Typography>
                  <Box>
                    <Grid container spacing={2}>
                      {items.map((ele) => {
                        return (
                          <>
                            <Grid item xs={6} md={4}>
                              <img
                                style={{
                                  borderRadius: "8px",
                                  // height: "10vw",
                                  width: "10vw",
                                }}
                                src={ele.image}
                                alt={ele.alt}
                              />
                            </Grid>
                          </>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      </Modal>

      <ThemeProvider theme={theme}>
      <Box sx={{minHeight:'16vh',bgcolor:'#0002'}}/> 
        <Box ml={4} mr={4} mt={0} mb={5}>
          
          {/* <Box mt={1}
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: theme.typography.subtitle2,
                  color: "grey",
                }}
              >
                Filter By
              </Typography>
              <KeyboardArrowRight
                sx={{
                  color: "grey",
                  fontSize: "medium",
                }}
              />
            </Box>
            <Box m={1} sx={{
              border:'1px solid grey',
              borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open1 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.subtitle1,
                    color: "grey",
                    fontWeight: 400,
                  }}
                >
                  Shapes
                </Typography>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1}>Logout</MenuItem>
              </Menu>
            </Box>

            <Box m={1} sx={{
              border:'1px solid grey',
              borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open1 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.subtitle1,
                    color: "grey",
                    fontWeight: 400,
                  }}
                >
                  Finish
                </Typography>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1}>Logout</MenuItem>
              </Menu>
            </Box>
            <Box m={1} sx={{
              border:'1px solid grey',
              borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open1 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.subtitle1,
                    color: "grey",
                    fontWeight: 400,
                  }}
                >
                  Color Scheme
                </Typography>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1}>Logout</MenuItem>
              </Menu>
            </Box>
            <Box m={1} sx={{
              border:'1px solid grey',
              borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open1 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.subtitle1,
                    color: "grey",
                    fontWeight: 400,
                  }}
                >
                  Color
                </Typography>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1}>Logout</MenuItem>
              </Menu>
            </Box>
            <Box m={1} sx={{
              border:'1px solid grey',
              borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open1 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.subtitle1,
                    color: "grey",
                    fontWeight: 400,
                  }}
                >
                  Storage Options
                </Typography>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1}>Logout</MenuItem>
              </Menu>
            </Box>
            <Box m={1} sx={{
              border:'1px solid grey',
              borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open1 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.subtitle1,
                    color: "grey",
                    fontWeight: 400,
                  }}
                >
                  Clear
                </Typography>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                <MenuItem onClick={handleClose1}>My account</MenuItem>
                <MenuItem onClick={handleClose1}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box> */}
          <Grid
            container
            spacing={3}
            sx={{
              padding: 0,
            }}
          >
            {items.map((ele) => {
              return (
                <>
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    sx={{
                      padding: 0,
                    }}
                  >
                    <Box sx={{ display: "flex" }} m={0} p={0} mb={2} mt={3}>
                      <Button
                        onClick={handleOpen}
                        sx={{
                          // textTransform:'none'
                          padding: 0,
                        }}
                      >
                        <img
                          style={{
                            borderRadius: "8px",
                            // height: "30vw",
                            // width: {sm:"30vw",xs:"50vw"},
                            width: "31vw",
                          }}
                          src={ele.image}
                          alt={ele.alt}
                        />
                      </Button>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="subtitle2">{ele.title}</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="subtitle2" sx={{ color: "#757575" }}>
                        {ele.subtitle}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Type;
