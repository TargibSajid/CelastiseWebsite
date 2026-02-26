import React , { useState,useEffect} from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Register() {

const[FormData, setFormData] = useState({
  fullName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  password: "",
  confirmPassword: "",
});

const[nameVisible, setNameVisible] = useState(false);

const[passwordMatch, setPasswordMatch] = useState(false);

const[visible, setVisible] = useState(false);

const[emailVisible, setEmailVisible] = useState(false);

const[phoneVisible, setPhoneVisible] = useState(false);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneNumberPattern = /^\d{11}$/;


useEffect(() => {  setPasswordMatch(FormData.password === FormData.confirmPassword);
  console.log(FormData.password);
  console.log(FormData.confirmPassword);
  console.log(passwordMatch);}, [FormData, passwordMatch]);




const handleChange = (e) => { setFormData({...FormData, [e.target.name]: e.target.value})};

useEffect(() => {console.log(FormData)}, [FormData]);

const Registration = () => {fetch("https://www.celastise.com/api/users/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  } ,
  body: JSON.stringify(FormData)
}).then(res => res.json())  .then(data => {alert(data.message)}).catch(err => console.log(err))};



  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4  ">
      <div className="w-full max-w-2xl bg-[rgb(31,31,31)] rounded-2xl shadow-xl p-8 border border-[#b76e79]">

        {/* Logo */}
        <img
          src="/Background/Logo.webp"
          alt="Celastise Logo"
          className="mx-auto w-50 h-40 sm:w-60 sm:h-40 md:w-80 md:h-60"
        />

        {/* First Name */}
        <div className="mb-6">
          <label className="block text-base text-gray-300 mb-2 font-sans">
            Full Name
          </label>
          <input
            name = "fullName"
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => {handleChange(e); if(e.target.value.length < 8 ) {setNameVisible(true)} else {setNameVisible(false)};}}
            className="w-full px-2 py-4 bg-[rgb(31,31,31)] text-white border-b-2 border-gray-600 border-l-0 border-r-0 border-t-0 rounded-none focus:outline-none focus:border-[#b76e79] transition-colors duration-300 font-sans placeholder:text-gray-500"
          />
        </div>
        {nameVisible && <p className="text-red-500 text-sm font-sans mt-1">Name must be at least 8 characters long.</p> }

        {/* Email */}
        <div className="mb-6">
          <label className="block text-base text-gray-300 mb-2 font-sans">
            Email
          </label>
          <input
            name = "email"
            type="email"
            onChange={(e)=>{handleChange(e); setEmailVisible(!emailPattern.test(e.target.value));}}
            placeholder="Enter your email address"
            className="w-full px-2 py-4 bg-[rgb(31,31,31)] text-white border-b-2 border-gray-600 border-l-0 border-r-0 border-t-0 rounded-none focus:outline-none focus:border-[#b76e79] transition-colors duration-300 font-sans placeholder:text-gray-500"
          />

          {emailVisible && <p className="text-red-500 text-sm font-sans mt-1">Enter an Valid email address.</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-base text-gray-300 mb-2 font-sans">
            Phone Number
          </label>
          <input
            name = "phoneNumber"
            type="tel"
            placeholder="Enter your phone number after +88 ..."
              onChange={(e)=>{handleChange(e); setPhoneVisible(!phoneNumberPattern.test(e.target.value));}}
            className="w-full px-2 py-4 bg-[rgb(31,31,31)] text-white border-b-2 border-gray-600 border-l-0 border-r-0 border-t-0 rounded-none focus:outline-none focus:border-[#b76e79] transition-colors duration-300 font-sans placeholder:text-gray-500"
          />
          {phoneVisible && <p className="text-red-500 text-sm font-sans mt-1">Phone number must be 11 digits long and digits only.</p>}
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="block text-base text-gray-300 mb-2 font-sans">
            Gender
          </label>
          <select
            name = "gender"
              onChange={(e)=>handleChange(e)}
            className="w-full px-2 py-4 bg-[rgb(31,31,31)] text-white border-b-2 border-gray-600 border-l-0 border-r-0 border-t-0 rounded-none focus:outline-none focus:border-[#b76e79] transition-colors duration-300 font-sans"
          >
            <option value="" className="bg-black">Select gender</option>
            <option value="male" className="bg-black">Male</option>
            <option value="female" className="bg-black">Female</option>
            <option value="other" className="bg-black">Other</option>
          </select>
        </div>


        {/* Password */}
        <div className="mb-6">
          <label className="block text-base text-gray-300 mb-2 font-sans">
            Password
          </label>
          <input
            name = "password"
            type="password"
              onChange={(e)=>handleChange(e)}
            placeholder="Enter password"
            className="w-full px-2 py-4 bg-[rgb(31,31,31)] text-white border-b-2 border-gray-600 border-l-0 border-r-0 border-t-0 rounded-none focus:outline-none focus:border-[#b76e79] transition-colors duration-300 font-sans placeholder:text-gray-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-8">
          <label className="block text-base text-gray-300 mb-2 font-sans">
            Confirm Password
          </label>
          <input
            name = "confirmPassword"
            type="password"
            onChange={(e)=>{handleChange(e)}}
            placeholder="Confirm password"
            onClick={()=>setVisible(true)}
            className="w-full px-2 py-4 bg-[rgb(31,31,31)] text-white border-b-2 border-gray-600 border-l-0 border-r-0 border-t-0 rounded-none focus:outline-none focus:border-[#b76e79] transition-colors duration-300 font-sans placeholder:text-gray-500"
          />
          {visible && <p className={`${passwordMatch ? "text-green-500" : "text-red-500"} m-10 font-sans `}>{passwordMatch ? "Passwords match!" : "Passwords do not match!"}</p>}
        </div>

        {/* Register Button */}
        <button className="w-full py-4 rounded-lg bg-white text-black font-sans text-2xl transition-all duration-300 hover:bg-[#b76e79] active:scale-[0.98] mb-6" onClick={() => {if(FormData.password != "" && FormData.confirmPassword != "" && FormData.phoneNumber != "" && FormData.email != "" && FormData.fullName != "" && passwordMatch) {Registration()} else {alert("Please fill all fields correctly.")}}}>
          Register
        </button>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-700" />
          <span className="px-4 text-base text-gray-400">OR</span>
          <div className="grow h-px bg-gray-700" />
        </div>

        {/* Google Sign Up */}
<div className="w-full flex justify-center items-center mb-6">


  <GoogleLogin
    onSuccess={(credentialResponse) => {
      const token = credentialResponse.credential;

      fetch("https://www.celastise.com/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
        credentials: "include"
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            console.log(  "Google Login Successful:",data);
          }
        })
        .catch((err) => console.log("Error:", err));
    }}
    onError={() => {
      console.log("Google Login Failed");
    }}
    theme="filled_black"
    size="large"
    text="Signup with Google"
    shape="pill"
  />
</div>

      </div>
    </div>
  );
}
