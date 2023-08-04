import { useState, useEffect } from "react"
import { BrandsData, Category, ColorsData } from "../../../../Constants/Constants"
import {FaBarsStaggered} from "react-icons/fa6";
import {AiOutlineSearch} from "react-icons/ai";
// import Range from "./Range";
// import Brands from "./Brands";
// import Categories from "./Categories";

const SideBar = () => {
 const [sidebar, setSidebar] = useState(true)
useEffect(() => {
  if(window.innerWidth <= 980) {
   setSidebar(false)
  }
}, [])

// Helper function to generate the correct CSS class for each color
// function getColor(colorName) {
//   switch (colorName) {
//     case "black":
//       return "black";
//     case "white":
//       return "white";
//     case "green-600":
//       return "#34D399";
//     case "red-600":
//       return "#EF4444";
//     case "blue-600":
//       return "#3B82F6";
//     case "slate-800":
//       return "#1F2937";
//     case "gray-800":
//       return "#374151";
//     case "blue-800":
//       return "#1E40AF";
//     case "orange-600":
//       return "#F59E0B";
//     case "pink-600":
//       return "#EC4899";
//     case "purple-600":
//       return "#8B5CF6";
//     case "black-80":
//       return "rgba(0, 0, 0, 0.8)";
//     default:
//       return "transparent";
//   }
// }


  return (
    <div className="flex flex-col lg:items-start justify-center lg:w-[400px] sm:w-[90%] w-[95%] h-auto px-4 lg:my-0 my-3">
      {/* sidebar mobile input  */}
      <div className="flex items-center justify-between lg:hidden">
        <div className="flex items-center justify-between">
          <input type="text" className="sm:w-[250px] w-[150px] h-[50px] border border-black/[0.15]"/>
          <div className="w-[50px] h-[50px] bg-green-600 flex justify-center items-center">
            <AiOutlineSearch className="text-[30px] text-white"/>
          </div>
        </div>
        <span  onClick={() => setSidebar(!sidebar)}>
          <FaBarsStaggered className="text-[30px] cursor-pointer"/>
        </span>
      </div>

      {/* sidebar pc */}
      {
        sidebar && (
          // select Categories 
          <div className={`lg:flex flex-col ${sidebar ? "block" : "hidden"} items-start gap-8 py-4 lg:static absolute top-0 left-0 lg:w-auto lg:w-[300px] lg:px-0 px-5 bg-white z-50`}>
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] font-[600]">Catogory</h1>
              { 
                Category.map((item) => {
                  return(
                    <>
                      <div className="flex  items-center gap-4" key={item.id}>
                        <input className="w-[20px] h-[20px] bg-transparent mt-4 cuesor-pointer" type="checkbox" name="life" id="life" />
                        <h1 className="text-[16px] text-gray-600 font-[300] mt-4">{item.name}</h1>
                      </div>
                    </>
                  )
                })
              } 
            </div>    
            {/* Select Price  */}
            <div className="flex flex-col gap-3 lg:my-0 my-8">
              <h1 className="text-[24px] font-[600]">Category</h1>
              <input type="range" name="" id="" className="w-[200px] text-green-60"/>
              <p className="text-14px text-black/[0.50] italic">Price $300 - $2000</p>
              <button className='text-[14px] text-white bg-[#2AC37D] py-2 px-6 rounded-[50px] w-[150px]  shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out'>Filter</button>
            </div>  
            {/* Select Brands  */}
            <div className="flex flex-col gap-2 ">
              <h1 className="text-[24px] font-[600]">Brands</h1>
              {
                BrandsData.map((item) => {
                  return(
                    <>
                      <div className="flex  items-center gap-4" key={item.id}>
                        <input className="w-[20px] h-[20px] bg-transparent mt-4 cuesor-pointer" type="checkbox" name="life" id="life" />
                        <h1 className="text-[16px] text-gray-600 font-[300] mt-4">{item.name}</h1>
                      </div>
                    </>
                  )
                })
              }
            </div>
            {/* select color  */}
            <div className="flex flex-col gap-2 lg:my-0 my-8">
              <h1 className="text-[24px] font-[600]">Color</h1>
              <div className="grid grid-cols-4 lg:gap-4 gap-2 items-center">
                {
                  ColorsData.map((item) => (
                    <div style={{ backgroundColor: `${item.name}`}}
                      className={`h-6 w-6 rounded-full  border border-black/[0.15] cursor-pointer`}
                      key={item.id}
                    ></div>
                  ))
                }
              </div>
            </div>
          </div>
        ) 
      }
    </div>
  )
} 

export default SideBar
