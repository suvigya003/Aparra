import React from 'react'
import Sections from './sections/Sections';
import Main from './interior/Main';
import Banner from './banner/Banner';
import TrustedPartner from './trustedPartner/TrustedPartner';
import Testimonials from './testimonials/Testimonials';
import WhyAparra from './whyAparra/WhyAparra';
import Navbar from '../navbar/Navbar';

const HomePage = () => {
  return (
    <> 
        <Navbar/>
        <Banner/>
        <Main/>
        <Sections/>
        {/* <Testimonials/> */}
        <WhyAparra/>
        <TrustedPartner/>        
    </>
  )
}

export default HomePage