import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FirstContactComponent from '../contactcomponents/FirstContactComponent'
import SecondContactComponent from '../contactcomponents/SecondContactComponent'
import ThirdContactComponent from '../contactcomponents/ThirdContactComponent'
function Contact() {
    return (
        <>
         <Navbar/>
         <FirstContactComponent/>
         <SecondContactComponent/>
         <ThirdContactComponent/>
        <Footer/>
        </>
       
    )
}

export default Contact
