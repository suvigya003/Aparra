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

const NewTestimonial = () => {

    const [testimonial, setTestimonial] = useState({
        name: '',
        message: '',
        designation: '',
        videoId:''
      });
    
      const handleChange = ({ currentTarget: input }) => {
        setTestimonial({
          ...testimonial,
          [input.name]: input.value,
        });
        console.log(testimonial);
      };

  return (
    <>
    <Box m={3}>
    <Card>
    <Box p={3}>
            <form 
            // onSubmit={handleSubmit}
            >
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="name"
                  value={testimonial.name}
                  onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                  label="Designation"
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="designation"
                  value={testimonial.designation}
                  onChange={handleChange}
                />
                </Grid>                
                <Grid item xs={12} md={6}>
                <TextField
                id="outlined-multiline-flexible"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  maxRows={4}
                  type="text"
                  name="message"
                  value={testimonial.message}
                  onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <Button variant="outlined" fullWidth component="label" sx={{pt:1.8,pb:1.8}}>
              Upload Pic
              <input
                hidden
                // accept="image/*"
                type="file"
              />
            </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                id="outlined-multiline-flexible"
                  label="Video Id"
                  variant="outlined"
                  fullWidth
                  multiline
                  maxRows={4}
                  type="text"
                  name="videoId"
                  value={testimonial.videoId}
                  onChange={handleChange}
                />
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

export default NewTestimonial