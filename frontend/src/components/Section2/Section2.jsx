import React, { useEffect } from 'react';




function Section2() {



    return (

        <section id="Section2" class="w-full  h-auto">
            <div class="w-full  h-[490px]  top-0  bg-black flex justify-center items-center ">
                <center>
                    <h2 class="text-7xl font-serif drop-shadow-[0_0_2px_black] text-[rgb(225,129,84)] ">Time Perfected Daily</h2>
                    <h2 class=" text-2xl! mt-10  font-sans drop-shadow-[0_0_2px_black] w-2/5 ">
                        At Celastise, we believe time is more than just hours and minutes—it’s an experience. Our exclusive selection of automatic and quartz watches brings together innovation, elegance, and enduring quality. Discover timepieces that reflect sophistication, reliability, and timeless design — made to complement every moment of your life.
                    </h2>
                </center>


            </div>

            <div class="w-full h-250  bg-black flex">

                <div id="premium" class="w-[21%] h-207  flex justify-center items-center mt-16 ml-16 mr-16 md-16 relative left-52 bg-[url('/Background/PremiumBG.png')] bg-contain  bg-fixed bg-position-[220px_center] ">

                    <h2 class="text-5xl  font-serif text-center drop-shadow-[0_0_2px_black] ">Premium Brand Collection</h2>

                </div>


                <div id="expert" class="w-[21%] h-207 flex justify-center items-center mt-16 ml-16 mr-16 md-16 relative left-52 bg-[url('/Background/ExpertBG.png')] bg-contain bg-fixed bg-position-[50px_center]">

                    <h2 class="text-5xl  font-serif text-center drop-shadow-[0_0_2px_black] ">Expert Watch Curation</h2>

                </div>



                <div id="secure" class="w-[21%] h-207 flex justify-center items-center mt-16 ml-16 mr-16 md-16 relative left-52 bg-[url('/Background/SecureBG.png')] bg-contain bg-fixed bg-position-[340px_center] ">

                    <h2 class="text-5xl  font-serif text-center drop-shadow-[0_0_2px_black]">Secure Online Shopping</h2>

                </div>



            </div>



            <div class="flex justify-around bg-black h-200">

                <div class="left-0 relative top-50 h-100">

                    <h2 class="text-6xl font-serif text-[rgb(225,129,84)]  mb-6">
                        What Our Customers Say
                    </h2>
                    <p class="text-3xl italic text-white leading-relaxed w-200 text-right">
                        The quality of watches at Celastise exceeded my expectations completely.
                        My Patek Philippe purchase was seamless and arrived perfectly packaged.
                    </p>
                    <p class="mt-4 text-[rgb(225,129,84)]  font-medium text-2xl ">Michael Thompson</p>

                </div>


                <div class="w-150 h-170 rounded-4xl relative right-40 text-black bg-[url('/Background/CusRevBG.jpg')] bg-contain bg-fixed bg-position-[230px_center] " id="cusrev"></div>


            </div>





        </section>
    );
}
export default Section2;