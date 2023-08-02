// import React from 'react'
import {FaStripe} from "react-icons/fa6";
import {FaCcPaypal} from "react-icons/fa6";
import {BiLogoVisa} from "react-icons/bi";
import {BiLogoMastercard} from "react-icons/bi";
import { useState } from "react";
const FooterHeader = () => {
    const [NewsLetter, setNewsLetter] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(NewsLetter){
            alert("Sign Up for NewsLetter Successfully")
            setNewsLetter("")
        }
    }
  return (
    <div className="flex justify-between items-center bg-[#333] py-10 my-16">
      <div className="container mx-auto flex lg:flex-row flex-col lg:justify-between justify-center items-center">
        <h1 className="text-white text-xl font-[600]">Sign Up to our NewsLeter</h1>
        <div className="flex justify-between mt-3">
            <form action="" className="bg-[#686868] sm:w-[600px] w-[95%] h-[55px] rounded-[50px] flex justify-between items-center px-2 mx-auto" onSubmit={(e) => handleSubmit(e)}>
                <input type='email' className="bg-[#686868] sm:w-[300px] w-[80%] sm:h-[45px] h-[40px] rounded-[50px] px-3 border-none outline-none text-[18px] text-white"
                value={NewsLetter}
                onChange={(e) => setNewsLetter(e.target.value)}
                required
                />
                <button className='sm:text-[18px] text-[14px] text-white bg-[#2AC37D] h-[45px] rounded-[50px] w-[200px] shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out border-0'>SIGN UP NOW</button>
            </form>
        </div>
        <div className="flex sm:gap-8 gap-5 mt-3">
            <FaStripe  className="text-[3rem] text-white"/>
            <FaCcPaypal  className="text-[3rem] text-white"/>
            <BiLogoVisa  className="text-[3rem] text-white"/>
            <BiLogoMastercard  className="text-[3rem] text-white"/>
        </div>
      </div>
    </div>
  )
}

export default FooterHeader
