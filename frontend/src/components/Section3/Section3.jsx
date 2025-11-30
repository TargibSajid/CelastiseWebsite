import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



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


            <div class="w-full bg-black py-32 px-8 text-center">
                <h1 class="text-7xl font-medium text-[rgb(225,129,84)] mb-8">
                    Find Your Perfect Timepiece Today
                </h1>

                <p class="text-2xl text-amber-50 font-sans max-w-5xl mx-auto leading-relaxed mb-14">
                    Browse our extensive collection of premium watches from world-renowned brands.
                    Start your journey to owning the perfect timepiece that reflects your unique
                    style and sophistication.
                </p>

                <button class="text-2xl bg-transaprent border text-white py-5 px-14  duration-500 hover:bg-[rgb(225,129,84)] transition">
                    Shop Now
                </button>
            </div>










            <div class="w-full bg-[rgb(31,31,31)] py-24 px-10 flex justify-between items-start">

                <div class="w-1/3">
                    <h1 class="text-4xl text-[rgb(225,129,84)] font-semibold mb-6">Celastise</h1>
                    <p class="text-white text-xl leading-relaxed font-sans">
                        Discover premium wrist watches
                        from renowned brands like Patek
                        Philippe, Fossil, Casio, and Olevs at
                        Celastise.
                    </p>
                </div>


                <div class="w-1/3">
                    <h2 class="text-2xl text-[rgb(225,129,84)] font-semibold mb-6">Pages</h2>
                    <ul class="space-y-3 text-xl text-white font-sans">
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div class="w-1/3">
                    <h2 class="text-3xl text-[rgb(225,129,84)] font-semibold mb-6">Social</h2>
                    <div class="flex items-center space-x-10 text-4xl">
                        <FaFacebookF class="hover:text-[rgb(225,129,84)] duration-500 text-blue-600 cursor-pointer"/>
                        <FaWhatsapp class="hover:text-[rgb(225,129,84)] duration-500 text-green-500 cursor-pointer"/>
                        <FaInstagram class="hover:text-[rgb(225,129,84)] duration-500 text-red-600 cursor-pointer"/>

                    </div>


                </div>

            </div>






        </section>
    );
}

export default Section3;