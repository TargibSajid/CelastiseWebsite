import React, { useEffect } from 'react';



function Section1() {
    return (
        <section  id = "Section1" class="w-full  h-215 flex justify-center items-center bg-[url('/Background/Section1BG.jpg')] bg-cover bg-center bg-fixed ">
            <center>      <h2 class = "text-3xl font-sans drop-shadow-[0_0_2px_black]">Value Beyond Expectations</h2>
            <h1 class = "text-white text-9xl! mt-5  drop-shadow-[0_0_2px_black]  ">    
                PREMIUM WATCHES
            </h1>
            <button class="w-60 h-20 rounded-none border-2 border-white bg-transparent text-white hover:bg-white hover:text-black duration-1000  text-3xl font-medium font-sans mt-10 drop-shadow-[0_0_2px_black]
">Shop Now</button></center>
      
        </section>
    );
}
export default Section1;