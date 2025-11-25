import React from 'react';

function FirstContactComponent() {
  return (
    <div className="relative w-screen bg-[#3B519B] py-20">
      
      {/* Logo */}
      <div className="absolute top-12 right-12 w-20 h-24">
        Logo
      </div>

      {/* Heading */}
      <h1 className="text-center font-outfit text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-20">
        Get in Touch With Us
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-3xl mx-auto text-center font-inter text-base sm:text-lg leading-7 text-gray-300 px-4">
        Whether you're interested in becoming a member, partnering with us on a project, 
        or just want to learn more about what we do, we'd love to hear from you.
      </p>
      
    </div>
  );
}

export default FirstContactComponent;
