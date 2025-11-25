
import React, { useEffect, useState } from "react";

// Helper component for a single event card (unchanged)
const EventCard = ({ title, date, time, description }) => (
  <div className="py-2 px-4 border-r border-gray-100 rounded-lg shadow-sm hover:shadow-lg">
    <div className="text-3xl text-gray-400 mb-3 tracking-widest leading-none"></div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

    {/* Date and Time styling */}
    <p className="text-sm font-semibold text-teal-600 mb-4">
      {date}
      <br />
      {time}
    </p>

    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/event/") // Django API
      .then((res) => res.json())
      .then((data) => {
        // Sort by id and take first 3
        const homePageEvents = data.sort((a, b) => a.id - b.id).slice(0, 3);
        setEvents(homePageEvents);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="absolute inset-x-0 top-0 h-40"></div>
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="container mx-auto max-w-5xl px-4 -mt-36 bg-white p-6 sm:p-10 lg:p-12 rounded-[16px] shadow-2xl border-2 border-purple-300">
          {/* Main Heading */}
          <div className="font-Montserrat text-3xl sm:text-[26px] font-[700] text-red-600 text-center mb-2 -mt-9 tracking-wider">
            UPCOMING MEETINGS & EVENTS
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={`${event.start_time} - ${event.end_time}`}
                description={event.description}
              />
            ))}

            {/* Placeholders if less than 3 events */}
            {events.length < 3 &&
              [...Array(3 - events.length)].map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="p-4 sm:p-6 text-gray-400"
                ></div>
              ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <a
              href="/events"
              className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
            >
              View All Events &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
