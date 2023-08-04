// import React from 'react'
import {BrandsData} from "../../../../Constants/Constants"
const Brands = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:w-[400px] sm:w-[90%]  w-[95%] mx-auto h-auto z-50">
      <div className="flex items-center justify-between lg:hidden">
        <div className="flex items-center justify-between">
          <input type="text" className="sm:w-[250px] w-[150px] h-[50px] border border-black/[0.15]"/>
          <div className="w-[50px] h-[50px] bg-green-600 flex justify-center items-center">
            <AiOutlineSearch className="text-[30px] text-white"/>
          </div>
        </div>
        <span  onClick={handleClick}>
          <FaBarsStaggered className="text-[30px] cursor-pointer"/>
        </span>
      </div>
      { sidebar && (
       <div className="lg:flex flex-col hidden">
        <h1 className="text-[24px] font-[600]">Category</h1>
          { Category.map((item) => {
            return(
            <div className="flex  items-center gap-4" key={item.id}>
              <input className="w-[20px] h-[20px] bg-transparent mt-4 cuesor-pointer" type="checkbox" name="life" id="life" />
              <h1 className="text-[16px] text-gray-600 font-[300] mt-4">{item.name}</h1>
            </div>
            )
          })}
          <hr className="my-10"/>
          <Range />
          <hr className="my-10"/>
          <Brands />
       </div>
      )}
      {showSidebar&& (
        <div className={`lg:hidden flex flex-col absolute bottom-0 bg-white border border-black/[0.50] sm:w-[500px] h-[100vh]  ${showSidebar ? "left-0" : "left-[-500px]"} z-50 px-4 transition-all duration-500 ease-in-out`}>
              <Categories />
            <hr className="my-10"/>
              <Range />
        </div>
      )}
    </div>
        <h1 className="text-[24px] font-[600]">Shoe Brands</h1>
          { BrandsData.map((item) => {
            return(
            <div className="flex  items-center gap-4" key={item.id}>
              <input className="w-[20px] h-[20px] bg-transparent mt-4 cuesor-pointer" type="checkbox" name="life" id="life" />
              <h1 className="text-[16px] text-gray-600 font-[300] mt-4">{item.name}</h1>
            </div>
            )
          })}
       </div>
  )
}

export default Brands
