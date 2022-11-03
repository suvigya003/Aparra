import React,{useState} from 'react'
import {
    Box,
    Grid,
    Card,
    Radio,
    Stack,
    Button,
    Drawer,
    Rating,
    Divider,
    Checkbox,
    FormGroup,
    IconButton,
    Typography,
    RadioGroup,
    FormControlLabel,
  } from '@mui/material';
  import TextField from '@mui/material/TextField';

const NewTrustedPartners = () => {

    // const [trustedPartners, setTrustedPArtners] = useState({
    //     name: '',
    //     message: '',
    //     designation: '',
    //   });
    
    //   const handleChange = ({ currentTarget: input }) => {
    //     setTestimonial({
    //       ...testimonial,
    //       [input.name]: input.value,
    //     });
    //     console.log(testimonial);
    //   };

  return (
    <>
    <Box m={3}>
    <Card>
    <Box p={3}>
            <form 
            // onSubmit={handleSubmit}
            >
                <Box mb={3}>
              <Typography variant="h6">Add New Partner</Typography>
            </Box>
            <Grid container spacing={3}>
                
                <Grid item xs={12} md={6}>
                <Button variant="outlined" fullWidth component="label" sx={{pt:1.8,pb:1.8}}>
              Upload Logo
              <input
                hidden
                // accept="image/*"
                type="file"
              />
            </Button>
                </Grid>
                
            </Grid>
            <Box mt={3}>
              <Button variant="contained" type="submit" >Submit</Button>
            </Box>
            </form>
            
        </Box>
    </Card>
    </Box>
    </>
  )
}

export default NewTrustedPartners