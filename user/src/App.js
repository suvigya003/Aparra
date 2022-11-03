import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Interior from './components/home page/interior/Main'
import Type from './components/home page/interior/Type'
import Sections from './components/home page/sections/Sections';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';
import HomePage from './components/home page/HomePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <Interior/> */}
      <Navbar/>
      {/* <div style={{overflowY:"scroll", height:"800px"}}></div>  */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/type" element={<Type/>} />
      </Routes>      
      </BrowserRouter>
      <Footer/>
      </ThemeProvider>  
    </>
  );
}

export default App;
