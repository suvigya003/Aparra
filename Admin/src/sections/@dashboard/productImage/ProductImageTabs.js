import React,{useState} from 'react';
import '../banner/Banner.css';
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
import UserIcon from '../user/UserIcon';
import Iconify from '../../../components/Iconify';
import kitchen from '../../../components/images/kitchen.jpg';
import diamond from '../../../components/images/diamond.png';
import dots from '../../../components/images/dots.png';
import UserMoreMenu from '../user/UserMoreMenu';
import ProductImageTable from './ProductImageTable';

const ProductImageTabs = () => {

  const [productImage, setProductImage] = useState({
    desc: '',
    size:''
  });

  const handleChange = ({ currentTarget: input }) => {
    setProductImage({
      ...productImage,
      [input.name]: input.value,
    });
    console.log(productImage);
  };

  return (
    <>
      <Box >
      <Box >
            <Box mb={3}>
                <Typography variant="h6">
                    Add New Image
                </Typography>
            </Box>
            <Box >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <Button variant="outlined" fullWidth component="label" sx={{ pt: 1.8, pb: 1.8,  }}>
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
                    label="Description"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="desc"
                    value={productImage.desc}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    label="Size"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="size"
                    value={productImage.size}
                    onChange={handleChange}
                  />
                </Grid>
                    {/* <Grid item xs={3}>
                        <Box mt={1} mb={3}>
                        <Button variant="contained" type="submit">Submit</Button>
                        </Box>
                    
                    </Grid> */}

                </Grid>
              
              
            </Box>
            <Box mt={3} mb={3}>
                        <Button variant="contained" type="submit">Submit</Button>
                        </Box>
          </Box>
          
          
            
            {/* <Box >
            <Box mb={3}>
                <Typography variant="h6">
                    Image List
                </Typography>
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
            </Box> */}
            <Box>
            <Box mt={3} ml={-3} mr={-3}>
            <ProductImageTable/>
          </Box>
            </Box>
          
     
          
          
      </Box>
    </>
  );
};

export default ProductImageTabs;
