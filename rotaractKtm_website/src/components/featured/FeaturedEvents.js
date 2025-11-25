// FeaturedEvents.jsx

import React from "react";
import { allFeaturedEvents } from "../../data/FeaturedEventsData";


// Single Featured Event Card
const FeaturedEventCard = ({ date, title, description, image }) => (
  <div className="relative w-[390px] h-[364px] bg-white rounded-[10px] shadow-[0_0_1px_rgba(23,26,31,0.87),0_0_2px_rgba(23,26,31,0.08)]">
    {/* Event Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-[219px] object-cover rounded-none"
    />

    {/* Event Date */}
    <p className="mt-3 ml-3 font-open-sans text-[14px] leading-[20px] font-semibold text-[#E43F7EFF]">
      {date}
    </p>

    {/* Event Title */}
    <h3 className="mt-1 ml-3 font-montserrat text-[20px] leading-[28px] font-bold text-[#2F3B65FF]">
      {title}
    </h3>

    {/* Event Description */}
    <p className="mt-2 ml-3 w-[342px] font-open-sans text-[14px] leading-[20px] font-normal text-[#4B5563FF]">
      {description}
    </p>
  </div>
);

const FeaturedEvents = () => {
  // Filter only visible events
  const featuredEvents = allFeaturedEvents.filter((event) => event.show);

  // Sort by ID ascending
  const sortedFeaturedEvents = featuredEvents.sort((a, b) => a.id - b.id);

  // Limit to first 3 events
  const homePageEvents = sortedFeaturedEvents.slice(0, 3);

  return (<>
  
    <section className="bg-white py-16 sm:px-10 lg:px-20">
  {/* Section Title */}
  <h2 className="font-montserrat text-[36px] leading-[40px] font-bold text-[#16376EFF] text-center mb-10">
    Featured Events
  </h2>

  {/* Event Cards Container */}
  <div className="flex flex-wrap gap-8 justify-center">
    {homePageEvents.map((event) => (
      <FeaturedEventCard key={event.id} {...event} />
    ))}

    {/* Placeholders if less than 3 events */}
    {homePageEvents.length < 3 &&
      [...Array(3 - homePageEvents.length)].map((_, i) => (
        <div
          key={`placeholder-${i}`}
          className="w-[390px] h-[364px] bg-gray-100 rounded-[10px]"
        />
      ))}
  </div>

  {/* View All Events Button */}
 <div className="flex justify-center mt-8">
  <button
    className="
      w-[180px] h-[48px] px-3 flex items-center justify-center
      font-open-sans text-[16px] leading-[26px] font-semibold
      text-white bg-[#2D679A] rounded-[10px]
      hover:bg-[#1E4669] active:bg-[#142E45]
      disabled:opacity-40
    "
  >
    View All Events
  </button>
</div>

</section>
</>

  );
};

export default FeaturedEvents;
