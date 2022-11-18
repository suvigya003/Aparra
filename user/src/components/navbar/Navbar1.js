import React, { useState, useEffect } from "react";
import { theme } from "../../theme";
import "./Navbar.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  ListItemText,
  Card,
  Box,
  Grid,
  Table,
  Stack,
  Avatar,
  Button,
  MenuItem,
  Menu,
  Fade,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navbar1 = () => {
  // const [color, setColor] = useState(false);
  // const [shown, setShown] = useState(false);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  // const changeColor=()=>{
  //   if(window.scrollY===90){
  //     setColor(true)
  //   }
  //   else setColor(false)
  // }

  // window.addEventListener('scroll',changeColor)

  // useEffect(() => {
  //   const changeColor = () => {
  //     // if(window.scrollY==90)
  //     if (
  //       document.body.scrollTop >= 200 ||
  //       document.documentElement.scrollTop >= 200
  //     ) {
  //       setColor(true);
  //       console.log("top");
  //     } else {
  //       setColor(false);
  //       console.log("bottom");
  //     }
  //   };

  //   window.addEventListener("scroll", changeColor);

  //   return () => {
  //     window.removeEventListener("scroll", changeColor);
  //   };
  // }, []);

  const navItems = [
    {
      name: "Modular Kitchen",
      path: "type",
    },
    {
      name: "TV Unit",
      path: "allcourses",
    },
    {
      name: "Storage & Wardrobe",
      path: "syllabus",
    },
    {
      name: "Crockery Unit",
      path: "gallery",
    },
    {
      name: "Study Table",
      path: "career",
    },
    {
      name: "Kids Bedroom",
      path: "notice-board",
    },
    
  ];

  const navItems_md = [
    {
      name: "Modular Kitchen",
      path: "type",
    },
    {
      name: "TV Unit",
      path: "allcourses",
    },
    {
      name: "Storage & Wardrobe",
      path: "syllabus",
    },
    {
      name: "Crockery Unit",
      path: "gallery",
    },
    {
      name: "Study Table",
      path: "career",
    },
    
  ];

  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: -2,
  };

  const socialMedia=[
    {
      image:'images/facebook.png',
      path:'#',
    },
    {
      image:'images/twitter.png',
      path:'#',
    },
    {
      image:'images/pinterest.png',
      path:'#',
    },
    {
      image:'images/whatsapp.png',
      path:'#',
    }
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "start" }}>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // justifyContent:'space-between'
        }}
      >
        <img
          src="images/Aparra logo.png"
          alt="Logo"
          height={50}
          style={{ marginLeft: "12px" }}
        />
        {/* <Typography  sx={{fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 0 0 0", pl:1 }}>
          Aparaa Living
        </Typography> */}
      </Box>
      <Divider />
      <List >
        {navItems.map((item, index) => (
          <div key={index}>
            {/* <NavLink to={`/${item.path}`}
             style={respNavLinkStyles}
            > */}
            <a href="#" style={{textDecoration:'none',color:'inherit'}}>
            <ListItem key={index}>
                <ListItemText>
                  <Typography
                    sx={{ fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    margin: "0 0 0 0",  }}
                  >
                    {item.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </a>
             
            {/* </NavLink> */}
            <Divider
              sx={{ width: "100%", backgroundColor: theme.palette.text.dark }}
            />
          </div>
        ))}
        <Box mb={2} mt={1} sx={{display:'flex', }} ml={2}>
        <List style={flexContainer}>
          {
            socialMedia.map((item,index)=>(
              <div key={index}>
                {/* <Link to="type"> */}
            {/* <ListItem > */}
                <ListItemText>
                <Box component="img" mr={1}
            sx={{
              // height: 245,
              display: 'block',
              maxWidth: {md:'2vw',xs:'23px'},
              overflow: 'hidden',
              width: '100%',
              borderRadius:'8px  8px 8px 8px'
            }}
              src={item.image}
            />
                </ListItemText>
              {/* </ListItem> */}
            {/* </Link>           */}
              </div>
            ))
          }            
          </List>            
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
      <Box className='header-list-bg' position="fixed"
            sx={{
              // mt: 3,
              pl:2,
              pr:2,
              display: {
                xs: "none",
                md: "flex",
              },
              flexDirection: "row",
              alignItems: "center",
                maxWidth: "1600px",
              width: "100%",
              // backgroundColor: theme.palette.primary.main,
              height: "85px",
              justifyContent: "space-evenly",
            }}
          >
            <img
          src="images/Aparra logo.png"
          alt="Logo"
          height={70}
          // style={{ marginLeft: "5px" }}
        />
            <Box className='header-list-bg'
              sx={{
                display: { xs: "none", lg: "flex" },
                width: "100%",
                maxWidth: "1200px",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              {navItems.map((item, index) => (
                <>
                 {/* <NavLink key={index} to={`/${item.path}`} style={navLinkStyles}> */}
                 <a href="#" style={{textDecoration:'none'}}>
                 <Box sx={{
                  marginLeft:{lg:'30px',md:'10px'},
                  marginRight:{lg:'30px',md:'10px'}
                 }}>
                 <Typography 
                className='header-list-bg'
                sx={{  fontSize: "14px",
                fontWeight: 400,
                margin: "0 0 0 0",
                lineHeight: "37px", }}
                >
                  {item.name}
                </Typography>
                 </Box>
                 </a>
                 
                
                
                {/* </NavLink> */}
                </>
              ))}
              
              <Box m={1} sx={{
              // border:'1px solid grey',
              // borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open1 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick1}
                // endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <MoreHorizIcon className='header-list-bg'
                // sx={{
                //   color:'white'
                // }}
                />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose1}>Pooja Unit</MenuItem>
                <MenuItem onClick={handleClose1}>Doors</MenuItem>
                <MenuItem onClick={handleClose1}>Vanity Van</MenuItem>
              </Menu>
            </Box>
            </Box>
            <Box className='header-list-bg'
              sx={{
                display: { xs: "none", lg: "none",md:'flex' },
                width: "100%",
                maxWidth: "1200px",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              {navItems_md.map((item, index) => (
                <>
                 {/* <NavLink key={index} to={`/${item.path}`} style={navLinkStyles}> */}
                 <a href="#" style={{textDecoration:'none'}}>
                 <Box sx={{
                  marginLeft:{md:'16px'},
                  marginRight:{md:'16px'}
                 }}>
                 <Typography 
                className='header-list-bg'
                sx={{  fontSize: "14px",
                fontWeight: 400,
                margin: "0 0 0 0",
                lineHeight: "37px", }}
                >
                  {item.name}
                </Typography>
                 </Box>
                 </a>
                 
                
                
                {/* </NavLink> */}
                </>
              ))}
              
              <Box m={1} sx={{
              // border:'1px solid grey',
              // borderRadius:'8px'
            }}>
              <Button
                id="fade-button"
                aria-controls={open2 ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
                // endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
                sx={{ textTransform: "none" }}
              >
                <MoreHorizIcon className='header-list-bg'
                // sx={{
                //   color:'white'
                // }}
                />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose2}>Kids Bedroom</MenuItem>
                <MenuItem onClick={handleClose2}>Pooja Unit</MenuItem>
                <MenuItem onClick={handleClose2}>Doors</MenuItem>
                <MenuItem onClick={handleClose2}>Vanity Van</MenuItem>
              </Menu>
            </Box>
            </Box>
          </Box>
        {/* <Box 
          // className={color ? "header-bg" : "header"}
          className={color ? "header-bg" : "header"}
            p={1}
            // fullWidth
            position="fixed"
          sx={{ maxWidth:'100%', display: {md:"flex",xs:'none'}, justifyContent:'center',alignItems:'center', }}
        >
          <Box >
            <Box
              component="img"
              // ml={'1vw'}
              // mb={"1vw"}
              m={1}
              sx={{
                // height: 245,
                display: "block",
                maxWidth: "14vw",
                overflow: "hidden",
                width: "100%",
                borderRadius: "8px  8px 8px 8px",
              }}
              src="images/Aparra logo.png"
              alt="logo"
            />
          </Box>
          <Box ml={'32vw'} sx={{
            flexGrow:1
          }}/>
          <Box
            // fullWidth
            sx={{
              height: "200",
              width: "100%",
              // display: "flex",
              // justifyContent: "end",
              // border:'1px solid black'
            }}
          >
            <Box
              // fullWidth
              sx={{
                // border:'1px solid black',
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {navItems.map((item, index) => (
          <div key={index}>
<Box m={1} >
                <Typography
                  className={color ? "header-bg" : "header"}
                  sx={{
                    fontSize: theme.typography.h1,
                    // color: `${color} ? white : black `,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>

          </div>
          ))}
              
              
            </Box>
          </Box>
        </Box> */}
        <Box className="header-list-bg" position="fixed" sx={{display:{xs:'block',md:'none'}}}>
        
        <Box 
          className='header-list-bg'
            p={1}
            // fullWidth
            
          sx={{ minWidth:'100vw', display: {xs:"flex"}, justifyContent:'space-between',alignItems:'center', }}
        >
          <Box >
            <Box
              component="img"
              // ml={'1vw'}
              // mb={"1vw"}
              m={1} ml={2}
              sx={{
                // height: 245,
                display: "block",
                maxWidth: "85px",
                overflow: "hidden",
                width: "100%",
                borderRadius: "8px  8px 8px 8px",
              }}
              src="images/Aparra logo.png"
              alt="logo"
            />
          </Box>
          {/* <Box ml={'70vw'} sx={{
            flexGrow:1
          }}/> */}
          <Box sx={{right:0}}>
            <Button sx={{padding:0}} 
            aria-label="open drawer"
            // onClick={()=>{
            //   setShown(!shown);
            // }}
            onClick={handleDrawerToggle}
            >
            <MenuIcon/>
            </Button>
          </Box>       
        </Box>
        <Box>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        </Box>
        </Box>
        
        {/* {
          shown?(
            <Box sx={{display:'flex',justifyContent:'right'}}>
            <Box mt='70px' pl={'2vw'} className={color ? "header-list-bg" : "header"}minWidth='40vw'  sx={{display:'flex', flexDirection:'column',justifyContent:'right',borderRadius:'0px 0px 8px 8px'}} position="fixed">
            <ul>
               <Box mt={'3vh'}>
               <li><a href="#">Design Gallery</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Modular Kitchen</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Bedroom</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Living Room</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Bathroom</a></li>
                </Box> 
                <Box mt={'3vh'}>
               <li><a href="#">Space Living Furniture</a></li>
                </Box> 
    
              </ul>
            </Box>
            </Box>

          ):null
        } */}
       
        
      </ThemeProvider>
    </>
  );
};

export default Navbar1;
