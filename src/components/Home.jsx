import React from 'react'
import FoodCategories from './FoodCategories'
import Footer from './Footer'
import SwiggyHero from './HEro'
import FoodDeliveryHero from './Home'
import AutoSlider from './Restaurent'
import AutoCarousel from './Restaurent'
// import Navbar from './Navbar'
import Features from './Features'
import CitiesWeServe from './Cities'

const Home = () => {
  return (
    <div className=" ">
    {/* <Navbar/> */}
    <SwiggyHero />
    <section className="py-10">
      <FoodCategories />
    </section>
    <section className="py-10">
      <Features/>
    </section>
    <section className="py-10">
      <AutoSlider />
    </section>
    <section className="py-10">
      <CitiesWeServe/>
    </section>
    {/* <Footer /> */}
  </div>
  )
}

export default Home