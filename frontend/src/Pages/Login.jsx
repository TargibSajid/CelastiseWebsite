import React,{useState,useEffect, use} from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login({setActive}) {
const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const [emailVisible, setEmailVisible] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(()=>{console.log(email, password)}, [email, password]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-2xl bg-[rgb(31,31,31)] rounded-2xl shadow-xl p-8 border border-[#b76e79]">
        <img src="./Background/Logo.webp" alt="Celastise Logo" className="mx-auto w-50 h-40 sm:w-60 sm:h-40 md:w-80 md:h-60" />


        {/* Username */}
        <div className="mb-6">
          <label className="block text-base text-gray-300 mb-2 font-sans ">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="
              w-full
              px-2 py-4
              bg-[rgb(31,31,31)]
              text-white
              border-b-2 border-gray-600
              border-l-0 border-r-0 border-t-0
              rounded-none
              focus:outline-none
              focus:border-[#b76e79]
              transition-colors duration-300
              font-sans
            "
            onChange={(e)=>{setEmailVisible(!emailpattern.test(e.target.value));
            setEmail(e.target.value)
            }}
          />

{emailVisible && <p className="text-red-500 text-sm mt-1 font-sans">Enter a valid email address</p> }

        </div>


        <div className="mb-6">
          <label className="block text-base text-gray-300 mb-2 font-sans">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="
              w-full
              px-2 py-4
            bg-[rgb(31,31,31)]
              text-white
              border-b-2 border-gray-600
              border-l-0 border-r-0 border-t-0
              rounded-none
              focus:outline-none
              focus:border-[#b76e79]
              transition-colors duration-300
                font-sans
            "
            onChange={(e)=>{setPassword(e.target.value); }}
          />
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-8">
          <a
            href="#"
            className="text-base text-[#b76e79] hover:underline font-sans "
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          className="
            w-full py-4
            rounded-lg
            bg-white
            text-black
            font-sans
            transition-all duration-300
            hover:bg-[#b76e79]
            hover:text-black
            active:scale-[0.98]
            mb-6
            text-2xl
          "
          onClick={() => {fetch("https://www.celastise.com/api/users/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email: email, password:password})
          }).then(res=>res.json()).then(data=>console.log("Login response:", data)).catch(err=>console.log("Error during login:", err));
          }}>
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow h-px bg-gray-700" />
          <span className="px-4 text-base text-gray-400">
            OR
          </span>
          <div className="grow h-px bg-gray-700" />
        </div>

        {/* Google Sign In */}

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
    shape="pill"
  />
</div>

        {/* Sign up */}
        <p className="text-center text-gray-400 text-base mt-8">
          Don’t have an account?{" "}
          <a href="#" className="text-[#b76e79] hover:underline" onClick={()=> setActive("signUP")}>
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}
