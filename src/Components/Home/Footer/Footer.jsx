// import React from 'react'
import FooterHeader from "./FooterHeader";
import {AiOutlineYoutube} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {BiLogoLinkedin} from "react-icons/bi";
import {BiLogoFacebook} from "react-icons/bi";
import { Link } from "react-router-dom";
import { Accountdetail, GetHelp, Shop } from "../../../Constants/Constants";
import FooterBottom from "./FooterBottom";
const Footer = () => {
 
  return (
    <div className="w-full p-0" >
      <FooterHeader />
      <div className="bg-no-repeat bg-right bg-cover " style={{backgroundImage: "url('https://nouthemes.net/html/trueshoes/images/background/parallax.jpg')"}}>
        <div className="bg-black/[0.80] ">
          <div className="container md:w-[85%] w-[95%] sm:grid sm:grid-cols-12 lg:place-items-center place-items-start py-20 mx-auto lg:gap-0  gap-5">
            {/* About Footer  */}
            <div className="lg:col-span-3 sm:col-span-6 ">
                <img className="sm:w-[140px] w-[90px]" src="http://nouthemes.net/html/trueshoes/images/logo-white.png" alt="Footer Logo" />
                <p className="text-[16px] text-white mt-5 font-[300] sm:w-auto w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in</p>
                <div className="flex gap-5 mt-5">
                  <AiOutlineYoutube className="text-[1.5rem] text-white"/>
                  <AiFillGithub className="text-[1.5rem] text-white"/>
                  <BiLogoLinkedin className="text-[1.5rem] text-white"/>
                  <BiLogoFacebook className="text-[1.5rem] text-white"/>
                </div>
            </div>
            {/* Shop Links Footer  */}
            <div className="lg:col-span-3 sm:col-span-6 ">
              {
                Shop.map((item) =>{
                  return(
                    <div className="flex flex-col" key={item.id}>
                        <h1 className="text-[1.5rem] text-white font-[600]">{item.title}</h1>
                        <Link className="mt-2 text-[16px] text-white hover:text-green-600 transition-all duration-300 ease-in"  to={item.Link}>{item.name}</Link>
                    </div>
                  )
                })
              }
            </div>
            {/* Shop Links Footer  */}
            <div className="lg:col-span-3 sm:col-span-6 ">
              {
                GetHelp.map((item) =>{
                  return(
                    <div className="flex flex-col" key={item.id}>
                        <h1 className="text-[1.5rem] text-white font-[600]">{item.title}</h1>
                        <Link className="mt-2 text-[16px] text-white hover:text-green-600 transition-all duration-300 ease-in"  to={item.Link}>{item.name}</Link>
                    </div>
                  )
                })
              }
            </div>
            {/* Shop Links Footer  */}
            <div className="lg:col-span-3 sm:col-span-6 ">
              {
                Accountdetail.map((item) =>{
                  return(
                    <div className="flex flex-col" key={item.id}>
                        <h1 className="text-[1.5rem] text-white font-[600]">{item.title}</h1>
                        <Link className="mt-2 text-[16px] text-white hover:text-green-600 transition-all duration-300 ease-in"  to={item.Link}>{item.name}</Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="border-b border-gray-300/[0.15]"></div>
          <FooterBottom />
        </div>
      </div>
    </div>
  )
}

export default Footer
