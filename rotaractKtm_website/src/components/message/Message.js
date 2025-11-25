const Message = () => {
  return (
    <section className="bg-gradient-to-r from-[#29487C] to-[#5AA1B5] py-24 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-white font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
        What Our Members Say
      </h2>

      {/* Description Text */}
      <p className="mt-6 sm:mt-12 mx-auto w-[768px] text-white font-montserrat text-[24px] leading-[32px] font-normal text-center italic">
        "Being part of Rotaract has transformed my perspective on service and leadership. The connections I've made and the impact we've had on our community has been truly life-changing."
      </p>

      {/* Member Info */}
      <div className="flex flex-col items-center mt-12">
        <p className="text-white font-open-sans text-[18px] leading-[28px] font-bold italic text-center">
          Aaditya Sharma
        </p>
        <p className="text-[#E5E7EB] font-open-sans text-[14px] leading-[20px] font-normal text-center">
          Member Since 2024
        </p>

        {/* Dots */}
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-white rounded-full opacity-100"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Message;
