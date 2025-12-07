import React, { useEffect } from 'react';


function Header() {

  return (
    <div  class="bg-[rgb(31,31,31)] text-black  md:w-full  shadow-md">
    <header class = "w-full h-full  relative bg-transparent grid grid-cols-2 grid-wrap items-center justify-center">
      <div class = " w-full h-full flex justify-center">
         <img src="/Background/Logo.png" class= " w-[32%] max-md:w-full relative object-cotain " alt="Logo" />
 </div>
        
        <nav class = "text-white text-[clamp(1rem,1.4vw,2rem)] font-sans h-full">
            <ul class = "flex flex-row h-full w-full justify-start items-center flex-wrap max-md:flex-col gap-4">
                <li class =" m-[min(20px,20%)]"><a href="#home" class="hover:text-[rgb(225,129,84)] duration-500 ">Home</a></li>
                <li class ="m-[min(20px,20%)]"><a href="#about" class="hover:text-[rgb(225,129,84)] duration-500" >About</a></li>
                <li class ="m-[min(20px,20%)]"><a href="#services" class="hover:text-[rgb(225,129,84)] duration-500" >Services</a></li>
                <li class ="m-[min(20px,20%)]"><a href="#contact" class="hover:text-[rgba(225,129,84,0.82)] duration-500 " >Contact</a></li>
            </ul>

        </nav> 
    </header>
    </div>

  );
}

export default Header;