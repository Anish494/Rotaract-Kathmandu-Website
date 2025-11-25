import React from "react";

const Banner = () => {
  const customStyles = {
    width: "full",
    height: "550px",
    // Applying the specific linear gradient
    background: "linear-gradient(90deg, #29487C 0%, #5AA1B5 100%)",
    // The border-radius property (0px 0px 0px 0px is equivalent to 0)
    borderRadius: "0",
  };
  return (
    <section
      // The main container for the entire banner section
      className=" inset-0 relative flex items-center justify-center font-montserrat "
        style={customStyles}
    >
      {/* Main Club Heading */}
      <div className="font-bold absolute top-[120px]  text-[60px] leading-[60px] text-white ">Rotaract Club of Kathmandu</div>

      {/* Tagline */}
      <div className="absolute top-[206px]  text-[36px] leading-[40px] font-light text-white">Lead · Connect · Transform</div>

      {/* Fellowship Motto Box */}
      <div className="absolute top-[271ppx]  text-[20px] leading-[28px] font-normal text-white">Fellowship Through Service</div>

      {/* Action Buttons */}
      <div className="connects">
        <a href="#get-involved" className=" absolute top-[325px] left-[580px] w-[181px] h-[60px] px-3 flex items-center justify-center
             font-sans font-semibold text-[16px] leading-[26px] text-white
             bg-[#E43F7EFF] rounded-[10px] border-none
             hover:bg-[#A7184FFF] active:bg-[#83133EFF] scale-105 transition-all duration-300
             disabled:opacity-40"
>
          Get Involved
        </a>
        <a href="#events"   className="absolute top-[325px] left-[776px] w-[181px] h-[60px] px-3 flex items-center justify-center
             font-sans font-semibold text-[16px] leading-[26px] text-white 
             bg-transparent border-2 border-white rounded-[10px]
              transform hover:scale-105 transition duration-300
             disabled:opacity-40"
>
          Explore Events
        </a>
      </div>
    </section>
  );
};

export default Banner;
