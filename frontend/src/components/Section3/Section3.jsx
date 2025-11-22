import React, { useEffect } from 'react';


function Section3() {
    return (
        <section id="Section3" class="w-full h-auto bg-black">
            <div class="w-full  h-[950px] bg-[url('/Background/LogoRose.png')]  bg-cover bg-fixed bg-position-[center_40%] border-[rgb(225,129,84)] border-4 ">
            </div>


            <div class="mx-auto  w-full">
                <h2 class="font-playfair text-center text-6xl text-[rgb(225,129,84)] mt-12">
                    Why Choose Celastise
                </h2>

                <div class="grid w-full grid-cols-2 gap-0">

                    <div class="w-full  justify-center items-center relative m-20 ml-70">
                        <h3 class="font-playfair text-left text-4xl text-[rgb(225,129,84)] mb-6">
                            Authentic Timepieces
                        </h3>
                        <p class="text-2xl leading-8 text-white text-left w-[70%] font-sans ">
                            Every watch in our collection is guaranteed authentic and sourced directly
                            from authorized dealers. We conduct thorough quality inspections to
                            ensure each timepiece meets our high standards. Our authentication process
                            includes verification of serial numbers and detailed craftsmanship
                            examination. You can shop with confidence knowing you're receiving
                            genuine luxury watches.
                        </p>
                    </div>

                    <div class="w-full justify-center items-center relative m-20">
                        <h3 class="font-playfair text-left text-4xl text-[rgb(225,129,84)] mb-6">
                            Expert Customer Service
                        </h3>
                        <p class="text-2xl leading-8 text-white text-left w-[70%] font-sans ">
                            Our knowledgeable team consists of watch enthusiasts who understand
                            the intricacies of fine timepieces. We provide personalized recommendations
                            based on your style preferences and budget requirements. Our customer service
                            extends beyond purchase with comprehensive warranty support and maintenance
                            guidance. We're committed to building lasting relationships with every watch
                            collector and enthusiast.
                        </p>
                    </div>

                </div>
            </div>

            <div class="w-full flex justify-center gap-4 p-4 mt-10 h-230  ">
            
                <div class="w-1/2 h-7/8  bg-[url('/Background/CasioBG.png')]   bg-no-repeat bg-position-[center_20%]"></div>

                
                <div class="w-1/2 h-7/8  bg-[url('/Background/PatekBG.jpg')]  bg-cover bg-center bg-no-repeat "></div>
            </div>










        </section>
    );
}

export default Section3;