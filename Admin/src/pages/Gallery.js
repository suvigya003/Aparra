import React from 'react'
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
  import kitchen from '../components/images/kitchen.jpg'

const Gallery = () => {
  return (
    <>
        <Box ml={3}mr={3}>
            <Card>
                <Box m={3}>
                    <Box ml={25} mr={25}>
                    <Button variant="outlined" fullWidth component="label" sx={{pt:1.8,pb:1.8}}>
              Upload Image
              <input
                hidden
                // accept="image/*"
                type="file"
              />
            </Button>
                    </Box>
                    <Box mt={3}>
                        <Grid container spacing={3}>
                            <Grid item xs={6} md={3}>
                                <img style={{borderRadius:'8px'}} src={kitchen} alt="kitchen"/>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <img style={{borderRadius:'8px'}} src={kitchen} alt="kitchen"/>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <img style={{borderRadius:'8px'}} src={kitchen} alt="kitchen"/>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <img style={{borderRadius:'8px'}} src={kitchen} alt="kitchen"/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Card>
        </Box>
    </>
  )
}

export default Gallery