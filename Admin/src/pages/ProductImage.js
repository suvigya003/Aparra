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
import NewModularKitchen from '../components/ProductImage/ModularKitchen/NewModularKitchen';
import TVUnit from '../components/ProductImage/TV Unit/TV Unit';
import StorageWardrobe from '../components/ProductImage/Storage&Wardrobe/Storage&Wardrobe';
import CrockeryUnit from '../components/ProductImage/Crockery Unit/CrockeryUnit';
import KidsBedroom from '../components/ProductImage/KidsBedroom/KidsBedroom';
import PoojaUnit from '../components/ProductImage/PoojaUnit/PoojaUnit';
import Doors from '../components/ProductImage/Doors/Doors';
import VanityVan from '../components/ProductImage/VanityVan/VanityVan';
import StudyTable from '../components/ProductImage/StudyTable/StudyTable';


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
        <TabPanel value="1"><NewModularKitchen /></TabPanel>
        <TabPanel value="2"><TVUnit/></TabPanel>
        <TabPanel value="3"><StorageWardrobe/></TabPanel>
        <TabPanel value="4"><CrockeryUnit/></TabPanel>
        <TabPanel value="5"><StudyTable/></TabPanel>
        <TabPanel value="6"><KidsBedroom/></TabPanel>
        <TabPanel value="7"><PoojaUnit/></TabPanel>
        <TabPanel value="8"><Doors/></TabPanel>
        <TabPanel value="9"><VanityVan/></TabPanel>
      </TabContext>
    </Box>
    </Card>
    </Box>
    
    
    </>
    
  );
}