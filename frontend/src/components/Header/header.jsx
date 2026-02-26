import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Shop from "../../Pages/Shop";

function NavBar({ setActive, setIsOpen }) {
  const navigate = useNavigate();
  return (
    <nav className="text-white text-[clamp(1rem,1.4vw,2rem)] font-sans overflow-hidden transition-all duration-1000 ease-out ">
      <ul className="flex flex-row h-full w-full justify-start items-center flex-wrap max-md:flex-col gap-4">
        <li className=" m-[min(20px,20%)]">
          <a
            href="#home"
            className="hover:text-[rgb(225,129,84)] duration-500 "
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            Home
          </a>
        </li>
        <li className="m-[min(20px,20%)]">
          <a
            href="#about"
            className="hover:text-[rgb(225,129,84)] duration-500"
            onClick={() => {
              navigate("/about");
              setIsOpen(false);
            }}
          >
            About
          </a>
        </li>
        <li className="m-[min(20px,20%)]">
          <a
            href="#shop"
            className="hover:text-[rgb(225,129,84)] duration-500"
            onClick={() => {
              navigate("/shop");
              setIsOpen(false);
            }}
          >
            Shop
          </a>
        </li>
        <li className="m-[min(20px,20%)]">
          <a
            href=""
            className="hover:text-[rgba(225,129,84,0.82)] duration-500 "
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Header({ setActive }) {

  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [isAdded, setAdd] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
      setAdd(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  }, [isOpen]);

  return (
    <div className="bg-[rgb(31,31,31)] text-black  md:w-full  shadow-md">
      <header className="w-full h-full  relative bg-transparent grid md:grid-cols-2 max-md:grid-rows  grid-wrap items-center justify-center">
        <div className=" w-full h-full flex justify-center">
          <img
            src="/Background/Logo.webp"
            className=" w-[32%] max-md:w-full relative object-cotain "
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        {isAdded && (
          <button
            className=" justify-self-center p-[5%] duration-1000 "
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? "/Background/Cross.png" : "/Background/List.png"}
              className={`p-[10%] transition-transform duration-1000 ease-in-out ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              alt="List"
            />
          </button>
        )}
        {isOpen && <NavBar  setIsOpen={setIsOpen} />}

        <button
          className="text-white absolute right-60 text-[clamp(1.1rem,1.5vw,1.6rem)] border-2 rounded-3xl border-[rgb(225,129,84)] p-5 transition-all duration-500 hover:bg-[rgb(225,129,84)] hover:text-black max-lg:fixed max-lg:bottom-1 max-lg:right-2 z-50 "
          onClick={() => {
            navigate('')
          }}
        >
          <FaShoppingCart className="w-6 h-6 " />
          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-2 
                     bg-[rgb(225,129,84)] text-black 
                     text-xl font-sans font-bold 
                     w-5 h-5 
                     flex items-center justify-center 
                     rounded-full"
            >
              {cartCount}
            </span>
          )}
        </button>

        <button
          className="
    absolute right-8 top-1/2 -translate-y-1/2
    border-2 border-[rgb(225,129,84)]
    text-white bg-[rgb(31,31,31)]
    text-[clamp(1.1rem,1.5vw,1.6rem)]
    px-10 py-3 rounded-2xl font-sans
    font-semibold tracking-wide
    transition-all duration-500
    hover:bg-[rgb(225,129,84)]
    hover:text-black
    max-md:static max-md:translate-y-0 max-md:mt-4
  "
          onClick={() =>{navigate("/login");} }
        >
          Sign in
        </button>
      </header>
    </div>
  );
}

export default Header;
