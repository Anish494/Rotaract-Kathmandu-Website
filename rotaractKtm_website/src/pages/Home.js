import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import UpcomingEvents from '../components/upcomingEvents/UpcomingEvents'
import AboutUs from '../components/about/AboutUs'
import FeaturedEvents from '../components/featured/FeaturedEvents'
import Gallery from '../components/gallery/Gallery'
import Message from '../components/message/Message'
import Footer from '../components/footer/Footer'
// import Contact from '../components/contact/Contact'
// import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <UpcomingEvents/>
      <AboutUs/>
      <FeaturedEvents/>
      <Gallery/>
      <Message/>
      <Footer/>
    </>  
  )
}

export default Home