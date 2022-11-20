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

  return (
    <>
    <Box m={3}>
    <Card>
    <Box p={3}>
            <form 
            // onSubmit={handleSubmit}
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
                  value={icons.message}
                  onChange={handleChange}
                />
                </Grid>              
                <Grid item xs={12} md={6}>
                <Button variant="outlined" fullWidth component="label" sx={{pt:1.8,pb:1.8}}>
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