import React, { useEffect,useState } from 'react';
import Collection from '../../Pages/Collection';



function NavBar()
{
  return (          <nav className="text-white text-[clamp(1rem,1.4vw,2rem)] font-sans overflow-hidden transition-all duration-1000 ease-out "
    >
            <ul className = "flex flex-row h-full w-full justify-start items-center flex-wrap max-md:flex-col gap-4">
                <li className =" m-[min(20px,20%)]"><a href="#home" className="hover:text-[rgb(225,129,84)] duration-500 ">Home</a></li>
                <li className ="m-[min(20px,20%)]"><a href="#about" className="hover:text-[rgb(225,129,84)] duration-500" >About</a></li>
                <li className ="m-[min(20px,20%)]"><a href="#services" className="hover:text-[rgb(225,129,84)] duration-500" onClick={<Collection/>}>Services</a></li>
                <li className ="m-[min(20px,20%)]"><a href="#contact" className="hover:text-[rgba(225,129,84,0.82)] duration-500 " >Contact</a></li>
            </ul>

        </nav> );
}


function Header() {


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


  return (
    <div  className="bg-[rgb(31,31,31)] text-black  md:w-full  shadow-md">
    <header className = "w-full h-full  relative bg-transparent grid md:grid-cols-2 max-md:grid-rows  grid-wrap items-center justify-center">
      <div className = " w-full h-full flex justify-center">
         <img src="./Background/Logo.webp" className= " w-[32%] max-md:w-full relative object-cotain " alt="Logo" />
 </div>
 
{isAdded && (
  <button className = " justify-self-center p-[5%] duration-1000 " onClick={()=>setIsOpen(!isOpen)}>
    <img src={isOpen ? "./Background/Cross.png" : "./Background/List.png"} className = {`p-[10%] transition-transform duration-1000 ease-in-out ${
                isOpen ? "rotate-90" : "rotate-0"
              }`} alt="List"  />

  </button>
)}
{isOpen && (<NavBar />) }


      
        

    </header>
    </div>

  );
}

export default Header;