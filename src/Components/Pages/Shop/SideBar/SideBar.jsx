import { useState, useEffect } from "react"
import { BrandsData, Category, ColorsData } from "../../../../Constants/Constants"
import {FaBarsStaggered} from "react-icons/fa6";
import {AiOutlineSearch} from "react-icons/ai";
import PriceFilter from "./Range";

const SideBar = ({setCategorizedItem}) => {
 const [sidebar, setSidebar] = useState(true);
useEffect(() => {
  if(window.innerWidth <= 980) {
   setSidebar(!sidebar)
  }
}, [])

  return (
    <div className="flex flex-col lg:items-start justify-center lg:w-[400px] sm:w-[90%] w-[95%] h-auto lg:px-4 lg:my-0 my-3 mx-auto">
      {/* sidebar mobile input  */}
      <div className="flex items-center justify-between lg:hidden ">
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
          <div className={`lg:flex flex-col items-start gap-8 py-4 lg:static absolute top-0 left-0 lg:w-auto sm:w-[300px] lg:px-0 px-5 bg-white z-50`} data-aos="fade-right">
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] font-[600]">Catogory</h1>
              { 
                Category.map((item) => {
                  return(
                    <>
                      <div className="flex  items-center gap-4 cursor-pointer" key={item.id}>
                        <input className="w-[20px] h-[20px] bg-transparent mt-4 cursor-pointer" type="checkbox" name="life" id="life"/>
                        <h1 className="text-[16px] text-gray-600 font-[300] mt-4"  onClick={() =>  setCategorizedItem(item.name)}>{item.name}</h1>
                      </div>
                    </>
                  )
                })
              } 
            </div>    
            {/* Select Price  */}
            <PriceFilter/> 
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
              <div className="grid grid-cols-4 gap-4">
                {
                  ColorsData.map((item) => (
                    <div style={{ backgroundColor: `${item.name}`}}
                      className={`h-6 w-6 rounded-full  border border-black/[0.15]`}
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
