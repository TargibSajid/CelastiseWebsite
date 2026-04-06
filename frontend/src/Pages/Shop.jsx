import React, { useState, useEffect } from 'react';
import Header from '../components/Header/header.jsx';
import { FaSearch } from 'react-icons/fa';
import Footer from '../components/Footer/footer.jsx';
import { useNavigate } from "react-router-dom";





function ProductCard({ ID,image, name, price}) {

const navigate = useNavigate();

  return (
    <div
      className="bg-[rgb(31,31,31)] rounded-xl shadow-md hover:shadow-xl  p-0 flex flex-col justify-between transition-all duration-500 cursor-pointer"
      onClick={() => {
        navigate(`/product/${ID}`);
      }}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-86 object-cover rounded-lg "
      />
      <div className="mt-4 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-semibold text-white p-2 ">{name}</h3>
        <p className="mt-1 text-green-600 font-bold text-base px-2 ">{price}</p>
        <button className="mt-4 w-full text-2xl bg-[rgb(225,129,84)] border border-gray-400 rounded-lg py-5 text-gray-800 font-sans hover:bg-gray-100 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}

function Shop() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");



useEffect(() => {
  fetch("https://www.celastise.com/api/watches") // your API
    .then(res => res.json())
    .then(data => {
      setProducts(data); // save the array in state
      console.log("Fetched products:", data);
      console.log("image:",products);
    })
    .catch(err => console.log("Error fetching:", err));
}, []);


  useEffect(() => {
    fetch(`https://www.celastise.com/api/watches/search?name=${encodeURIComponent(search.toLowerCase())}`) // your API
      .then(res => res.json())
      .then(data => {
        setProducts(data); // save the array in state
        console.log("Fetched products:", data);
      })
      .catch(err => console.log("Error fetching:", err));
  }, [search]);




    return (
    <>
      <Header/>
      <div className="min-h-screen bg-black  px-4 sm:px-8 lg:px-16 py-10 transition-all duration-500">

    <div className="text-center mb-10">
        <h1 className="text-[clamp(2rem,3vw,10rem)] leading-relaxed text-[rgb(225,129,84)]  font-bodoni">
            Premium Watches for Every Style
        </h1>
        <p className="text-white mt-2 font-sans text-2xl ">
            Discover luxury, premium & affordable watches
        </p>
    </div>

    <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 hover:text-[rgb(225,129,84)] transition font-sans" onClick={() => {fetch("https://www.celastise.com/api/watches") // your API
    .then(res => res.json())
    .then(data => {
      setProducts(data); // save the array in state
      console.log("Fetched products:", data);
    })
    .catch(err => console.log("Error fetching:", err));}}>
            All
        </button>
        <button className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-[rgb(225,129,84)] transition font-sans" onClick={() => {fetch("https://www.celastise.com/api/watches/high") // your API
    .then(res => res.json())
    .then(data => {
      setProducts(data); // save the array in state
      console.log("Fetched products:", data);
    })
    .catch(err => console.log("Error fetching:", err));}} >
            High Range
        </button>
        <button className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-[rgb(225,129,84)] transition font-sans" onClick={() => {fetch("https://www.celastise.com/api/watches/medium") // your API
    .then(res => res.json())
    .then(data => {
      setProducts(data); // save the array in state
      console.log("Fetched products:", data);
    })
    .catch(err => console.log("Error fetching:", err));}} >
            Medium Range
        </button>
        <button className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-[rgb(225,129,84)] transition  font-sans" onClick={() => {fetch("https://www.celastise.com/api/watches/low") // your API
    .then(res => res.json())
    .then(data => {
      setProducts(data); // save the array in state
      console.log("Fetched products:", data);
    })
    .catch(err => console.log("Error fetching:", err));}} >
            Low Range
        </button>
    </div>


        <div className="flex items-center justify-center mb-10 gap-5 ">
      <input
        type="text"
        placeholder="Search watches..."
        value ={search}
        onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-1/2 max-sm:w-2/3 h-12 rounded-lg text-3xl text-white font-sans border border-gray-400 focus:outline-none"
      />

      <button
        className="px-4 py-2 h-12 bg-[rgb(225,129,84)] text-black rounded-lg hover:opacity-80 transition" onClick={() => {fetch(`https://celastise.com/api/watches/search?name=${encodeURIComponent(search.toLowerCase())}`) // your API
    .then(res => res.json())
    .then(data => {
      setProducts(data); // save the array in state
      console.log("Fetched products:", data);
    })
    .catch(err => console.log("Error fetching:", err));}}>
        <FaSearch className="w-5 h-5" />
      </button>
    </div>
<div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


        {/* Map over the rest of the products */}
        {products.map((product, index) => (
          <ProductCard
            key={index}
            ID={product.product_id}
            image={`${product.image_url}/${product.color}/Front.webp`}
            name={product.name}
            price={`${product.price}৳`}
          />
        ))}
      </div>
    </div>

</div>

<Footer />
</>

    );
}

export default Shop;