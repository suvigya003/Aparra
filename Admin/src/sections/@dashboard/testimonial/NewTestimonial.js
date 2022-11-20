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
  import axios from 'axios';

const NewTestimonial = () => {

    const [testimonials, setTestimonials] = useState({
        name: '',
        message: '',
        designation: '',
        videoId:''
      });
    
      const handleChange = ({ currentTarget: input }) => {
        setTestimonials({
          ...testimonials,
          [input.name]: input.value,
        });
        console.log(testimonials);
      };

      const [image, setImage] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0], '$$$$');
    console.log(image);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log('testimonials', testimonials);
      console.log('image', image);
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', testimonials.name);
      formData.append('message', testimonials.message);
      formData.append('designation', testimonials.designation);
      formData.append('videoId', testimonials.videoId);
      console.log('formData', formData);

      await axios.post(`http://localhost:8080/api/aparra/addTestimonials`, formData).then((res) => {
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
    <Box m={3}>
    <Card>
    <Box p={3}>
            <form 
            onSubmit={handleSubmit}
            >
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="name"
                  value={testimonials.name}
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
                  value={testimonials.designation}
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
                  value={testimonials.message}
                  onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <Button variant="outlined" fullWidth component="label" sx={{pt:1.8,pb:1.8}}
                value = {image}
                onChange = {(e) => handleImageFile(e)}
                >
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
                  value={testimonials.videoId}
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