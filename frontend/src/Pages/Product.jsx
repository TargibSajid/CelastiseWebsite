import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { useParams } from "react-router-dom";






export default function Product() {

const [product, setProduct] = useState(null);
const  id  = useParams().id;

useEffect(() => { fetch(`https://www.celastise.com/api/watches/info?p=${encodeURIComponent(id)}`)

.then(res => res.json())

.then(data => { setProduct(data); // save the array in state

})



.catch(err => console.log("Error fetching:", err));
}, [id]);


  console.log("Product outside useEffect:", product);
  const [selectedImage, setSelectedImage] = useState("");
  console.log("Selected Image:", selectedImage);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  console.log("Selected Color:", selectedColor);

  useEffect(() => {
  if (product && product[0]) {
    const defaultColor = product[0].color;

    setSelectedColor(defaultColor);
    setSelectedImage(
      `${product[0].image_url}/${defaultColor}/Front.jpeg`
    );
  }
}, [product]);




  const images = [
    `${product?.[0].image_url}/${selectedColor}/Front.jpeg`,
    `${product?.[0].image_url}/${selectedColor}/Left.jpeg`,
    `${product?.[0].image_url}/${selectedColor}/Right.jpeg`,
    `${product?.[0].image_url}/${selectedColor}/Overview.jpeg`,
    `${product?.[0].image_url}/${selectedColor}/Side.jpeg`,
  ];

  const colors = product?.[0].available_color ? product[0].available_color.split(",") : ["black", "silver", "gold"];



  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {   fetch(`https://www.celastise.com/api/watches/related?p=${encodeURIComponent(id)}`) // your API

.then(res => res.json())
.then(data => { setRelatedProducts(data); // save the array in state
})
.catch(err => console.log("Error fetching:", err));
}, [id]);

  return (
    <>
    <Header/>
    <div className = "bg-black text-white">

      {/* Main Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={selectedImage}
              alt={product?.[0].name || "Loading..."}
              loading="lazy"
              className="rounded-xl w-full h-auto shadow-lg"
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              {product?.[0].discount || "Loading..."}%
            </div>
            <button className="absolute bottom-2 left-2 flex items-center gap-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded hover:bg-opacity-80 transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-4.586 2.63a.75.75 0 01-1.082-.66V7.861a.75.75 0 011.082-.66l4.586 2.63a.75.75 0 010 1.296z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                />
              </svg>
              Watch Video
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-3 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                loading="lazy"
                alt={`${product?.[0].name} ${i}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 shrink-0 ${
                  selectedImage === img ? "border-yellow-500 border-5 " : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>








        {/* Right: Info */}
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-[rgb(225,129,84)] ">
            {product?.[0].name || "Loading.."}
          </h1>

          {/* Price */}
          <div className="flex items-center space-x-3 flex-wrap">
            <span className="text-red-500 line-through">৳{product?.[0].price || "Loading..."}</span>
            <span className="text-xl sm:text-2xl font-bold text-green-500">৳{product?.[0].price - (product?.[0].price * product?.[0].discount / 100) || "Loading..."}</span>
            <span className="px-2 py-1 bg-green-500 text-white text-sm rounded">-{product?.[0].discount || "Loading..."}%</span>
          </div>

          {/* Color selector */}
          <div className="flex items-center space-x-2">
            <span className="font-medium text-3xl ">Color:</span>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
                    selectedColor === color ? "border-white border-4" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-1 py-0 border-none text-4xl rounded hover:text-[rgb(225,129,84)]"
            >
              -
            </button>
            <span className="font-medium text-3xl ">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-1 py-0 border-none text-4xl rounded hover:text-[rgb(225,129,84)]"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-[rgb(225,129,84)] text-2xl font-sans text-white py-3 rounded hover:bg-white hover:text-[rgb(225,129,84)] justify-center transition-all duration-1000 ">
              <center><FaShoppingCart/> Add to Cart</center>
            </button>
            <button className="flex-1 bg-gray-200 text-[rgb(225,129,84)] py-3 text-2xl font-sans rounded hover:bg-[rgba(225,129,84)] hover:text-white transition">
              Buy Now
            </button>
          </div>

          {/* Extra info */}
          <p className="text-white font-sans text-1xl mt-7  h-9 leading-normal">
            For men who want <strong className="text-[rgb(225,129,84)] text-1xl ">style, reliability, and everyday confidence</strong>, this {product?.[0].name || "Loading..."} watch ticks every box.
          </p>
          <p className="text-sm mt-10 text-white">16 People watching this product now</p>

          {/* Trust / COD */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-green-500">
              <span>✔</span>
              CUSTOMER TRUST
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <span>🔥</span>
              COD CHARGE
            </div>
          </div>
        </div>
      </div>

      {/* Description + Reviews */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 leading-normal text-2xl font-sans ">
        {/* Features */}
        <div className="bg-[rgb(31,31,31)] p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-lg">Features</h2>
          <ul className="list-disc pl-5 text-white space-y-1">
            <li> <span className="text-[rgb(225,129,84)]">Dial:</span> {product?.[0].dial || "  Loading..."}</li>
            <li><span className="text-[rgb(225,129,84)]">Case:</span> {product?.[0].watch_case || "  Loading..."}</li>
            <li><span className="text-[rgb(225,129,84)]">Strap:</span>{product?.[0].strap_type || "  Loading..."}</li>
            <li><span className="text-[rgb(225,129,84)]">Glass:</span> {product?.[0].glass || "  Loading..."}</li>
            <li><span className="text-[rgb(225,129,84)]">Movement:</span>{product?.[0].movement || "  Loading..."} </li>
            <li><span className="text-[rgb(225,129,84)]">Water Resistance:</span> {product?.[0].water_resistant || "  Loading..."} </li>
            <li><span className="text-[rgb(225,129,84)]">Includes:</span> {product?.[0].include || "  Loading..."}</li>
          </ul>
          <p className="text-white text-lg">
            The <span className="text-[rgb(225,129,84)]">{product?.[0].name || "Loading..."}</span> Watch is all about presence. Bold, modern, and unmistakably stylish...
          </p>
          <p className="text-red-500 text-lg font-semibold flex items-center gap-1">
            ⚠ Disclaimer
          </p>
          <p className="text-white text-lg">
            This is of <span className="text-[rgb(225,129,84)]">{product?.[0].name || "Loading..."}</span>. No official brand warranty applies.
          </p>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="font-semibold text-lg">Customer Reviews</h2>
          <p className="text-gray-500 text-sm mt-2">There are no reviews yet.</p>
        </div>
      </div>

      {/* Related products */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-lg font-semibold mb-4">You may also like</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {relatedProducts.map((p, i) => (
            <div key={i} className="w-48 shrink-0 bg-[rgb(31,31,31)] rounded-lg shadow hover:shadow-xl transition">
              <div className="relative">
                <img src={p.image} loading="lazy" alt={p.name} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {p.discount}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <p className="text-gray-500 text-sm line-through">৳3,500.00</p>
                <p className="text-gray-900 font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
        <Footer/>
    </div>
    </>
  );
}
