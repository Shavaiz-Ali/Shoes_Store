// import React from "react";
import ProductTitle from "./ProductTitle";
import {useState} from "react"
const ProductNavigation = ({ setSelectedBrand, num }) => {
  const [activeTab, setActiveTab] = useState(false)
  const handleClick = (item) =>{
    setSelectedBrand(item.name)
    setActiveTab(true)
  }
  const navItems = [
    {

      id: 1,
      name: "All",
      quantity:num,
    },
    {

      id: 2,
      name: "Nike",
      quantity:num,
    },
    {

      id: 3,
      name: "Adidas",
      quantity:num,
    },
    {

      id: 3,
      name: "Jordan",
      quantity:num,
    },
    {

      id: 3,
      name: "Gucci",
      quantity:num,
    },
    {

      id: 3,
      name: "B&G",
      quantity:num,
    },
  ];

  return (
    <div className="container mx-auto md:w-[85%] w-[95%] flex lg:flex-row flex-col xl:flex-nowrap flex-wrap xl:justify-between justify-center mt-[4rem]">
      <ProductTitle title={"Features"} subTitle={"Features Products"} className="mx-auto" />
      <ul className="flex lg:flex-nowrap flex-wrap lg:justify-center lg:items-end justify-start sm:gap-12 gap-4 sm:mt-0 mt-3 mx-auto">
        {navItems.map((item) => (
          <li
            className="relative sm:text-[16px] text-[13px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600 active:text-green-600 cursor-pointer"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.name}
            <p className="absolute top-0 right-[-10px] text-[12px]">{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductNavigation;
