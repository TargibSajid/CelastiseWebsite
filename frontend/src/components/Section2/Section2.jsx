import React, { useEffect } from 'react';




function Section2() {



    return (

        <section id="Section2" class="w-full  h-auto">
            <div class="w-full    max-sm:h-auto  top-0  bg-black flex justify-center items-center p-[min(60px,5%)]  ">
                <center>
                    <h2 class="text-[clamp(2rem,3vw,10rem)] leading-relaxed font-serif drop-shadow-[0_0_2px_black] text-[rgb(225,129,84)] m-5">Time Perfected Daily</h2>
                    <h2 class=" text-[clamp(1.3rem,1.5vw,5rem)] leading-normal font-sans drop-shadow-[0_0_2px_black] p-[min(40px,2%)] sm:w-3/5 ">
                        At Celastise, we believe time is more than just hours and minutes—it’s an experience. Our exclusive selection of automatic and quartz watches brings together innovation, elegance, and enduring quality. Discover timepieces that reflect sophistication, reliability, and timeless design — made to complement every moment of your life.
                    </h2>
                </center>


            </div>

            <div class="w-full h-250 max-lg:h-400  bg-black grid lg:grid-cols-[37.5%_25%_37.5%] max-lg:grid-rows-3    ">

                <div id="premium" class="w-[50%] h-[70%] lg:mt-[10%] mt-[5%] justify-self-center max-lg:w-[70%] max-lg:h-[90%] lg:justify-self-end flex  justify-center items-center  bg-[url('/Background/PremiumBG.png')] bg-contain max-lg:bg-cover bg-fixed lg:bg-position-[220px_center] ">

                    <h2 class="text-5xl  font-serif text-center drop-shadow-[0_0_2px_black] ">Premium Brand Collection</h2>

                </div>


                <div id="expert" class="w-[70%] h-[70%] lg:m-[15%] mt-[5%] max-lg:justify-self-center max-lg:h-[90%] flex justify-center items-center  bg-[url('/Background/ExpertBG.png')] bg-contain max-lg:bg-cover bg-fixed lg:bg-position-[50px_center]">

                    <h2 class="text-5xl  font-serif text-center drop-shadow-[0_0_2px_black] ">Expert Watch Curation</h2>

                </div>



                <div id="secure" class="w-[50%] h-[70%] lg:mt-[10%] mt-[5%] max-lg:w-[70%] max-lg:h-[90%] justify-self-center lg:justify-self-start flex justify-center items-center bg-[url('/Background/SecureBG.png')] bg-contain max-lg:bg-cover bg-fixed lg:bg-position-[200px_center] ">

                    <h2 class="text-5xl  font-serif text-center drop-shadow-[0_0_2px_black]">Secure Online Shopping</h2>

                </div>



            </div>



            <div class="grid lg:grid-cols-[60%_40%] max-lg:grid-rows-2  bg-black lg:h-200 max-lg:h-auto">

                <div class=" self-center lg:h-[70%] lg:w-[80%] justify-self-center  p-[min(20px,2%)]">

                    <h2 class="text-[clamp(2rem,3vw,10rem)] leading-relaxed font-serif text-[rgb(225,129,84)]  max-lg:text-center  mb-6">
                        What Our Customers Say
                    </h2>
                    <p class="text-[clamp(1.3rem,1.5vw,5rem)] italic text-white leading-relaxed max-lg:text-center  text-left">
                        The quality of watches at Celastise exceeded my expectations completely.
                        My Patek Philippe purchase was seamless and arrived perfectly packaged.
                    </p>
                    <p class="mt-4 text-[rgb(225,129,84)] max-lg:text-center font-medium text-2xl ">Michael Thompson</p>

                </div>


                <div class=" aspect-square rounded-4xl w-[70%] max-lg:mb-[10%] max-lg:mt-[10%] justify-self-start self-start max-lg:justify-self-center   text-black bg-[url('/Background/CusRevBG.jpg')] lg:bg-contain max-lg:bg-cover bg-fixed lg:bg-position-[300px_center] max-lg:bg-position-[480px_center] " id="cusrev"></div>


            </div>





        </section>
    );
}
export default Section2;