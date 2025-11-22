import React, { useEffect } from 'react';


function Header() {

  return (
    <div  class="bg-[rgb(31,31,31)] text-black py-2 px-4 rounded top-0 left-0 w-full h-39 shadow-md">
    <header class = "w-full h-full relative bg-transparent">
        <img src="/Background/Logo.png" width="300" height="200" alt="Logo" class = "left-50 relative bottom-10 max-sm:w-40  max-sm:top-3 max-sm:left-0  \\"/>

        <nav class = "text-white text-3xl font-sans">
            <ul class = "flex space-x-4 absolute right-70 top-14 ">
                <li class ="mr-10 ml-10"><a href="#home" class="hover:text-[rgb(225,129,84)] duration-500 @max-3xs:::text-blue-400">Home</a></li>
                <li class ="mr-10 ml-10"><a href="#about" class="hover:text-[rgb(225,129,84)] duration-500" >About</a></li>
                <li class ="mr-10 ml-10"><a href="#services" class="hover:text-[rgb(225,129,84)] duration-500" >Services</a></li>
                <li class ="mr-10 ml-10"><a href="#contact" class="hover:text-[rgb(225,129,84)] duration-500 max-sm:text-blue-400" >Contact</a></li>
            </ul>

        </nav> 
    </header>
    </div>

  );
}

export default Header;