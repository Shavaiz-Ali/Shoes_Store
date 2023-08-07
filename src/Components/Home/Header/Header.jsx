
import {useState,  useEffect } from "react";

const Header = () => {
  const [dropdowm, setDropdown] = useState(false);

  const setMouseOnEnter =() =>{
    setDropdown(true)
  }
  const setMouseOnLeave =() =>{
    setDropdown(false)
  }
  return (
    <div className="flex justify-between items-center h-12 border-b border-black/[0.15]" data-aos="zoom-in" data-aos-duration="1200">
      <div className="address sm:ml-[20px]">
        <p className="text-[14px] text-normal text-black/[0.50] lg:block hidden">460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 - 804-399-3580</p>
      </div>
      <div className="flex justify-center items-center sm:mr-[20px]">
        <button className="border border-black/[0.15] border-b-0 text-[14px] text-normal text-black/[0.50] h-12 sm:px-4 px-2 py-2 hover:bg-black/[0.05] hover:text-green-600 transtion-all duration-300 ease-in-out">LOGIN & REGISTER</button>
        <button className="border border-black/[0.15] border-b-0 border-r-0 border-l-0 text-[14px] text-normal text-black/[0.50] h-12 sm:px-4 px-2 py-2 hover:bg-black/[0.05] hover:text-green-600 transtion-all duration-300 ease-in-out">USD</button>
        <button className="relative border border-black/[0.15] border-b-0 text-[14px] text-normal text-black/[0.50] h-12 sm:px-4 px-2 py-2 hover:bg-black/[0.05] hover:text-green-600 transtion-all duration-300 ease-in-out"  onMouseEnter={setMouseOnEnter} onMouseLeave={setMouseOnLeave}>LANGUAGE

          <div className={`absolute ${dropdowm ? "top-[60px]" : "top-[-500px]"} left-[-290px] flex flex-col items-center justify-center gap-3 bg-white shadow-xl shadow-black/[0.50] h-[300px] w-[300px] z-50 transition-all duration-700 ease-in-out`}>
            <li className="text-xl text-black bg-black/[0.10] h-[40px] w-[120px] flex items-center justify-center rounded list-none ">Sign In</li>
            <li className="text-xl text-black bg-black/[0.10] h-[40px] w-[120px] flex items-center justify-center rounded list-none ">Sign Up</li>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header
