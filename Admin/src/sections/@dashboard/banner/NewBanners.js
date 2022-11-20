import React, { useState } from 'react';
import './Banner.css';
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
} from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import UserIcon from '../user/UserIcon';
import Iconify from '../../../components/Iconify';
import kitchen from '../../../components/images/kitchen.jpg';
import diamond from '../../../components/images/diamond.png';
import dots from '../../../components/images/dots.png';
import UserMoreMenu from '../user/UserMoreMenu';

const NewBanners = () => {
  const [banner, setBanner] = useState({
    title: '',
    subtitle: '',
    buttonText: '',
    link: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setBanner({
      ...banner,
      [input.name]: input.value,
    });
    console.log(banner);
  };

  const [image, setImage] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0], '$$$$');
    console.log(image);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log('banner', banner);
      console.log('image', image);
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', banner.title);
      formData.append('subtitle', banner.subtitle);
      formData.append('buttonText', banner.buttonText);
      formData.append('link', banner.link);
      console.log('formData', formData);

      await axios.post(`http://localhost:8080/api/aparra/addBanner`, formData).then((res) => {
        console.log(res);
      }
      ).catch((err) => {
        console.log(err);
      });
      alert("Data submitted successfully!!");
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <Box ml={3} mr={3} mb={3}>
        <Card>
        <form onSubmit={handleSubmit}>
          <Box m={3}>
            <Box mb={3}>
              <Typography variant="h6">Add New</Typography>
            </Box>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <Button variant="outlined" fullWidth component="label" sx={{ pt: 1.8, pb: 1.8 }}
                value = {image}
                onChange = {(e) => handleImageFile(e)}
                >
                    Upload Image
                    <input
                      hidden
                      // accept="image/*"
                      type="file"
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="title"
                    value={banner.title}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    label="Subtitle"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="subtitle"
                    value={banner.subtitle}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    label="Button Text"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="buttonText"
                    value={banner.buttonText}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    label="Button Link"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="link"
                    value={banner.link}
                    onChange={handleChange}
                  />
                </Grid>
                {/* <Grid item xs={3}>
                  <Box mt={1} mb={3}>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Box>
                </Grid> */}
              </Grid>
            </Box>
            <Box mt={3} mb={3}>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Box>
          </Box>
          </form>
        </Card>

        
        {/* <Box mt={3}>
          <Card>
            <Box m={3}>
              <Box mt={3}>
                <Box mb={3}>
                  <Typography variant="h6">Image List</Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={3}>
                    <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                      <UserIcon />
                      <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                      <UserIcon />
                      <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                      <UserIcon />
                      <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                      <UserIcon />
                      <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </Box> */}
      </Box>
    </>
  );
};

export default NewBanners;
