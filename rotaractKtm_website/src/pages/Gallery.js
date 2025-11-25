import React from 'react'
import Navbar from '../components/navbar/Navbar'
import GallerySecondComponent from '../components/gallerycomponents/GallerySecondComponent'
import GalleyFirstComponent from '../components/gallerycomponents/GalleryFirstComponent'
import Footer from '../components/footer/Footer'
function Gallery() {
    return (
        <>
        <Navbar/>
        <GalleyFirstComponent/>
        <GallerySecondComponent/>
        <Footer/>
        </>
    )
}

export default Gallery
