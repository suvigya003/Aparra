import React from 'react'
import Sections from './sections/Sections';
import Main from './interior/Main';
import Banner from './banner/Banner';
import TrustedPartner from './trustedPartner/TrustedPartner';
import Testimonials from './testimonials/Testimonials';

const HomePage = () => {
  return (
    <>
        <Banner/>
        <Main/>
        <Sections/>
        <Testimonials/>
        <TrustedPartner/>
    </>
  )
}

export default HomePage