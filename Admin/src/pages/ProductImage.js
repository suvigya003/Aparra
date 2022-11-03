import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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
import ProductImageTabs from '../sections/@dashboard/productImage/ProductImageTabs';


export default function ProductImage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box ml={3} mr={3}> 
    <Card>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Kitchen" value="1" />
            <Tab label="Wardrobes" value="2" />
            <Tab label="TV Panels" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><ProductImageTabs/></TabPanel>
        <TabPanel value="2"><ProductImageTabs/></TabPanel>
        <TabPanel value="3"><ProductImageTabs/></TabPanel>
      </TabContext>
    </Box>
    </Card>
    </Box>
    
    
    </>
    
  );
}