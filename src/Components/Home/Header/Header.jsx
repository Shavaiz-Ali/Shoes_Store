import AOS from "aos";
import "aos/dist/aos"
import { useEffect } from "react";

const Header = () => {
    useEffect(() =>{
            // Initialize AOS with custom options
            AOS.init({
              duration: 800, // Animation duration (in milliseconds)
              easing: 'ease-in-out', // Easing for animations
              once: true, // Animation happens only once while scrolling down
              mirror: false, // Elements animate out while scrolling past them
            });
    },[])
  return (
    <div className="flex justify-between items-center h-12 border-b border-black/[0.15]" data-aos="zoom-in" data-aos-duration="1200">
      <div className="address sm:ml-[20px]">
        <p className="text-[14px] text-normal text-black/[0.50] lg:block hidden">460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 - 804-399-3580</p>
      </div>
      <div className="flex justify-center items-center sm:mr-[20px]">
        <button className="border border-black/[0.15] border-b-0 text-[14px] text-normal text-black/[0.50] h-12 sm:px-4 px-2 py-2 hover:bg-black/[0.05] hover:text-green-600 transtion-all duration-300 ease-in-out">LOGIN & REGISTER</button>
        <button className="border border-black/[0.15] border-b-0 border-r-0 border-l-0 text-[14px] text-normal text-black/[0.50] h-12 sm:px-4 px-2 py-2 hover:bg-black/[0.05] hover:text-green-600 transtion-all duration-300 ease-in-out">USD</button>
        <button className="border border-black/[0.15] border-b-0 text-[14px] text-normal text-black/[0.50] h-12 sm:px-4 px-2 py-2 hover:bg-black/[0.05] hover:text-green-600 transtion-all duration-300 ease-in-out">LANGUAGE</button>
      </div>
    </div>
  )
}

export default Header
