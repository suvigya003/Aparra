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
  import axios from 'axios'

const NewIcons = () => {

    const [icons, setIcons] = useState({
        name: '',        
      });
    
      const handleChange = ({ currentTarget: input }) => {
        setIcons({
          ...icons,
          [input.name]: input.value,
        });
        console.log(icons);
      };

      const [image, setImage] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0], '$$$$');
    console.log(image);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log('icons', icons);
      console.log('image', image);
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', icons.name);
      console.log('formData', formData);

      await axios.post(`http://localhost:8080/api/aparra/addCategory`, formData).then((res) => {
        console.log(res);
      }
      ).catch((err) => {
        console.log(err);
      });
      alert("New Category added successfully!!");
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
                <Box mb={3}>
              <Typography variant="h6">Add New Category</Typography>
            </Box>
            
            <Grid container spacing={3}>  
            <Grid item xs={12} md={6}>
                <TextField
                id="outlined-multiline-flexible"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  multiline
                  maxRows={4}
                  type="text"
                  name="name"
                  value={icons.name}
                  onChange={handleChange}
                />
                </Grid>              
                <Grid item xs={12} md={6}>
                <Button variant="outlined" fullWidth component="label" sx={{pt:1.8,pb:1.8}}
                value = {image}
                onChange = {(e) => handleImageFile(e)}
                >
              Upload Icon
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

export default NewIcons