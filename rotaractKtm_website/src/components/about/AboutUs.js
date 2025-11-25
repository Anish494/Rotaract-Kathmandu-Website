// Abou
import React from 'react';
import aboutImage from '../../assets/about.jpg'

const AboutUs = () => {

    return (
        // Section Container: Adds space above and below the whole block
        <section className=" bg-white py-16 sm:px-10 lg:px-20 ">
            <div className="container mx-auto max-w-7xl ">
                
                {/* Responsive Grid: Stacks on mobile, 2 columns on medium screens and up */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    
                    {/* --- Left Column: Text and Button --- */}
                    <div className="md:order-1 order-2">
                        
                        {/* Heading */}
                        <h2 className="text-4xl font-extrabold text-[#16376EFF] mb-6">
                            About Us
                        </h2>
                        
                        {/* Body Text */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            The Rotaract Club of Kathmandu is a dynamic community of young 
                            professionals and students dedicated to positive change through leadership, 
                            service, and international understanding. We develop skills, address 
                            community needs, and build lasting friendships while making a meaningful 
                            impact in our communities.
                        </p>
                        
                        {/* CTA Button */}
                        <a 
                            href="#about-page" 
                            className="inline-block px-8 py-3 bg-[#2D679AFF] text-white font-semibold 
                                       rounded-lg hover:bg-blue-800 transition duration-300"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* --- Right Column: Image --- */}
                    <div className="md:order-2 order-1 md:ml-1">
                        <img 
                            src={aboutImage} 
                            alt="Rotaract Group Photo" 
                            className="w-[80%] mx-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;