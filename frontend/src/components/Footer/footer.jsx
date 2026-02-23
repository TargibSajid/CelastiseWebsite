import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function Footer() {
  return (

<>

    <div className="w-full bg-black grid sm:grid-cols-3 max-sm:grid-rows-3 p-[3%]">

      <div className="w-full p-[3%]">
        <h1 className="text-4xl text-[rgb(225,129,84)] font-semibold max-sm:text-center mb-6">Celastise</h1>
        <p className="text-white text-xl leading-relaxed max-sm:text-center max-sm:justify-self-center font-sans w-[70%] ">
          Discover premium wrist watches
          from renowned brands like Patek
          Philippe, Fossil, Casio, and Olevs at
          Celastise.
        </p>
      </div>


      <div className="w-full p-[3%]">
        <h2 className="text-2xl text-[rgb(225,129,84)] max-sm:text-center font-semibold mb-6">Pages</h2>
        <ul className="space-y-3 text-xl text-white  max-sm:text-center max-sm:justify-self-center font-sans w-[50] ">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>


      <div className="w-full p-[3%]">
        <h2 className="text-3xl text-[rgb(225,129,84)] max-sm:text-center font-semibold mb-6">Social</h2>
        <div className="flex items-center max-sm:justify-center space-x-10 text-4xl">
          <a href="https://m.me/celastise?ref=Alvism" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-[rgb(225,129,84)] duration-500 text-blue-600 cursor-pointer" />
          </a>

          <a href="https://wa.me/+8801558156964" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-[rgb(225,129,84)] duration-500 text-green-500 cursor-pointer" />
          </a>

          <a href="https://www.instagram.com/celastise/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-[rgb(225,129,84)] duration-500 text-red-600 cursor-pointer" />
          </a>
        </div>

      </div>





    </div>



      <div className="w-full bg-[rgb(225,129,84)] text-white  bottom-0">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">


          <p className="text-sm sm:text-base mb-2 sm:mb-0">
            © All Rights Reserved
          </p>


          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <span>Powered by</span>
            <img src="./Background/Logo.svg" alt="Ancestral Logo" className="h-6 w-auto" />
            <span className="text-black">Ancestral</span>
          </div>

        </div>
      </div>

  </>


  );
}

export default Footer;
