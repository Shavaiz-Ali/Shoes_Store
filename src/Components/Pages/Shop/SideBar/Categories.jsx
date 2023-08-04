// import React from 'react'
import { Category } from '../../../../Constants/Constants'

const Categories = () => {
  return (
    
    <div className="flex flex-col">
        <h1 className="text-[24px] font-[600]">Category</h1>
        { Category.map((item) => {
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

export default Categories
