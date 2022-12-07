import React from 'react'
import Sections from './homePageSections/KitchenSlider';
import Category from './category/Category';
import Banner from './banner/Banner';
import TrustedPartner from './trustedPartner/TrustedPartner';
import Testimonials from './testimonials/Testimonials';
import WhyAparra from './whyAparra/WhyAparra';
import Navbar from '../navbar/Navbar';
import KitchenSlider from './homePageSections/KitchenSlider';
import KidsBedroomSlider from './homePageSections/KidsBedroomSlider';
import TVUnitSlider from './homePageSections/TVUnitSlider';
import StorageWardrobeSlider from './homePageSections/StorageWardrobeSlider';

const HomePage = () => {
  return (
    <> 
        <Navbar/>
        <Banner/>
        <Category/>
        <Sections/>
        <KitchenSlider />
        <TVUnitSlider />
        <StorageWardrobeSlider/>
        <KidsBedroomSlider/>
        {/* <Testimonials/> */}
        <WhyAparra/>
        <TrustedPartner/>        
    </>
  )
}

export default HomePage