import React from 'react'
import Hero from '../components/Hero'
import CarCard from '../components/CarCard'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Cetagory from '../components/Cetagory';
import Feature from '../components/Feature'


const Home = () => {
  return (
    <div>
      <Hero />
      
      <Cetagory/>
      <FeaturedSection />
      <Feature />
      <Banner />
      <Testimonial />
      <NewsLetter />
      
    </div>
  )
}

export default Home
