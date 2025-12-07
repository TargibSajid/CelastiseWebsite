import React from 'react';

function Section1() {
    return (
        <section id="Section1" class="w-full h-215 max-sm:h-115 flex flex-col justify-center items-center bg-[url('/Background/Section1BG.jpg')] bg-cover max-sm:bg-bottom-center bg-center bg-fixed  p-[min(10px,8%)]">
            
            <h2 class="text-[clamp(1.5rem,1.8vw,3.5rem)] font-sans drop-shadow-[0_0_2px_black] m-5">
                Value Beyond Expectations
            </h2>

            <h1 class="text-white text-[clamp(3rem,8vw,10rem)] leading-[1.1] max-md:w-1/2 drop-shadow-[0_0_2px_black] m-5 justify-end">
                PREMIUM WATCHES
            </h1>

            <button class="w-60 h-20 rounded-none border-2 border-white bg-transparent text-white hover:bg-white hover:text-black duration-1000 text-3xl font-medium font-sans m-5 drop-shadow-[0_0_2px_black]">
                Shop Now
            </button>
      
        </section>
    );
}

export default Section1;
