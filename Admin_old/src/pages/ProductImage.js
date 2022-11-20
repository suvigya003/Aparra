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
            <Tab label="Modular Kitchen" value="1" />
            <Tab label="TV Unit" value="2" />
            <Tab label="Storage & Wardrobe" value="3" />
            <Tab label="Crockery Unit" value="4" />
            <Tab label="study Table" value="5" />
            <Tab label="Kids Bedroom" value="6" />
            <Tab label="Pooja Unit" value="7" />
            <Tab label="Doors" value="8" />
            <Tab label="Vanity Van" value="9" />
          </TabList>
        </Box>
        <TabPanel value="1"><ProductImageTabs/></TabPanel>
        <TabPanel value="2"><ProductImageTabs/></TabPanel>
        <TabPanel value="3"><ProductImageTabs/></TabPanel>
        <TabPanel value="4"><ProductImageTabs/></TabPanel>
        <TabPanel value="5"><ProductImageTabs/></TabPanel>
        <TabPanel value="6"><ProductImageTabs/></TabPanel>
        <TabPanel value="7"><ProductImageTabs/></TabPanel>
        <TabPanel value="8"><ProductImageTabs/></TabPanel>
        <TabPanel value="9"><ProductImageTabs/></TabPanel>
      </TabContext>
    </Box>
    </Card>
    </Box>
    
    
    </>
    
  );
}