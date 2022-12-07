import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Interior from './components/home page/interior/Main'
// import Type from './components/home page/interior/Type'
// import Sections from './components/home page/sections/Sections';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import HomePage from './components/home page/HomePage';
// import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import Abc from './components/Abc'
// import Trial from './components/Trial'
import Kitchen from "./components/home page/category/expandCategory/kitchen/Kitchen";
import TVUnit from "./components/home page/category/expandCategory/tvUnit/TVUnit";
import StorageWardrobe from "./components/home page/category/expandCategory/storageWardrobe/StorageWardrobe";
import Crockery from "./components/home page/category/expandCategory/crockery/Crockery";
import StudyTable from "./components/home page/category/expandCategory/studyTable/StudyTable";
import PoojaUnit from "./components/home page/category/expandCategory/poojaUnit/PoojaUnit";
import Doors from "./components/home page/category/expandCategory/doors/Doors";
import KidsBedroom from "./components/home page/category/expandCategory/kidsBedroom/KidsBedroom";
import VanityVan from "./components/home page/category/expandCategory/vanityVan/VanityVan";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <Navbar/> */}
      {/* <Abc/> */}
      {/* <Trial/> */}
      <BrowserRouter >
      <Routes>
      <Route  path="/" element={<HomePage/>} />
      {/* <Route path="/type" element={<Type/>} /> */}
      <Route path="/modularKitchen" element={<Kitchen/>} />
      <Route path="/tvUnit" element={<TVUnit/>} />
      <Route path="/storageWardrobe" element={<StorageWardrobe/>} />
      <Route path="/crockery" element={<Crockery/>} />
      <Route path="/studyTable" element={<StudyTable/>} />
      <Route path="/poojaUnit" element={<PoojaUnit/>} />
      <Route path="/doors" element={<Doors/>} />
      <Route path="/kidsBedroom" element={<KidsBedroom/>} />
      <Route path="/vanityVan" element={<VanityVan/>} />
      </Routes>      
      </BrowserRouter>
      <Footer/>
      </ThemeProvider>  
    </>
  );
}

export default App;
