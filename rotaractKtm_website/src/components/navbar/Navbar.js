import React from "react";
import logo from "../../assets/logo.png"; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Name Section */}
        <div className="flex items-center gap-3">
          <img 
            src={logo}
            alt="Rotaract Club of Kathmandu Logo"
            className="w-12 h-auto"
          />

          <h1 className="font-bold text-xl text-[#2F3B65FF]">
            Rotaract Club of Kathmandu
          </h1>
        </div>

        {/* Menu + Join Button */}
        <div className="flex items-center gap-8">

          {/* Navigation Menu with NavLink (NO MAP USED) */}
          <nav className="flex gap-6 text-base leading-6 font-normal text-gray-600">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#E44E8CFF] 
                ${isActive ? "text-[#E44E8CFF] border-b-2 border-[#E44E8CFF]" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#E44E8CFF] 
                ${isActive ? "text-[#E44E8CFF] border-b-2 border-[#E44E8CFF]" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#E44E8CFF]
                ${isActive ? "text-[#E44E8CFF] border-b-2 border-[#E44E8CFF]" : ""}`
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#E44E8CFF]
                ${isActive ? "text-[#E44E8CFF] border-b-2 border-[#E44E8CFF]" : ""}`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition duration-200 hover:text-[#E44E8CFF]
                ${isActive ? "text-[#E44E8CFF] border-b-2 border-[#E44E8CFF]" : ""}`
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* Join Us Button */}
          <a
            href="/join-us"
            className="bg-[#E44E8CFF] text-white font-semibold px-6 py-2 rounded-lg
                       hover:bg-[#C53A7A] hover:scale-105
                       transition-[colors,transform] duration-300"
          >
            Join Us
          </a>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
