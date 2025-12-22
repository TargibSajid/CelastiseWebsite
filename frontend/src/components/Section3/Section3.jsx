import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function Section3() {
    return (
        <section id="Section3" className="w-full h-auto bg-black">
            <div className="w-full  lg:h-[950px] h-[500px] bg-[url('/Background/LogoRose.webp')]  lg:bg-cover  max-lg:bg-no-repeat max-lg:bg-size-[100%_100%] lg:bg-fixed bg-position-[center_40%] border-[rgb(225,129,84)] border-4 ">
            </div>


            <div className="mx-auto  w-full">
                <h2 className="font-playfair text-center text-6xl text-[rgb(225,129,84)] mt-12">
                    Why Choose Celastise
                </h2>

                <div className="grid w-full sm:grid-cols-2  max-sm:grid-rows-2 gap-0">

                    <div className="w-full  justify-center items-center p-[10%] ">
                        <h3 className="font-playfair  text-center text-4xl text-[rgb(225,129,84)] mb-6">
                            Authentic Timepieces
                        </h3>
                        <p className="text-[clamp(1rem,1.5vw,1.5rem)] leading-8 text-white text-left max-sm:text-center   font-sans ">
                            Every watch in our collection is guaranteed authentic and sourced directly
                            from authorized dealers. We conduct thorough quality inspections to
                            ensure each timepiece meets our high standards. Our authentication process
                            includes verification of serial numbers and detailed craftsmanship
                            examination. You can shop with confidence knowing you're receiving
                            genuine luxury watches.
                        </p>
                    </div>

                    <div className="w-full justify-center items-center p-[10%] ">
                        <h3 className="font-playfair text-center text-4xl text-[rgb(225,129,84)] mb-6">
                            Expert Customer Service
                        </h3>
                        <p className="text-[clamp(1rem,1.5vw,1.5rem)] leading-8 text-white text-left max-sm:text-center font-sans ">
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

            <div className="w-full sm:flex sm:justify-center gap-4 p-4 mt-10 h-230 max-sm:grid max-sm:grid-rows-2 ">

                <div className="sm:w-1/2 sm:h-7/8  bg-[url('/Background/CasioBG.webp')]   bg-cover bg-center bg-no-repeat"></div>


                <div className="sm:w-1/2 sm:h-7/8  bg-[url('/Background/PatekBG.webp')]  bg-cover bg-center bg-no-repeat "></div>
            </div>


            <div className="w-full bg-[rgb(31,31,31)] py-32 px-8 text-center">
                <h1 className="text-7xl font-medium text-[rgb(225,129,84)] mb-8">
                    Find Your Perfect Timepiece Today
                </h1>

                <p className="text-2xl text-amber-50 font-sans max-w-5xl mx-auto leading-relaxed mb-14">
                    Browse our extensive collection of premium watches from world-renowned brands.
                    Start your journey to owning the perfect timepiece that reflects your unique
                    style and sophistication.
                </p>

                <button className="text-2xl bg-[rgb(225,129,84)] border text-white py-5 px-14  duration-500 hover:bg-transparent transition">
                    Shop Now
                </button>
            </div>










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






        </section>
    );
}

export default Section3;