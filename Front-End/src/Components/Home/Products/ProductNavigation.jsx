// import React from "react";
import ProductTitle from "./ProductTitle";
// import {useState} from "react"
const ProductNavigation = ({ setSelectedBrand, num, activetab }) => {
  // const [activeTab, setActiveTab] = useState(false)
  const handleClick = (item) =>{
    setSelectedBrand(item.name)
    activetab(item.name)
  }
  const navItems = [
    {

      id: 1,
      name: "All",
      quantity:8,
    },
    {

      id: 2,
      name: "Nike",
      quantity:2,
    },
    {

      id: 3,
      name: "Adidas",
      quantity:2,
    },
    {

      id: 4,
      name: "Jordan",
      quantity:2,
    },
    {

      id: 5,
      name: "Gucci",
      quantity:1,
    },
    {

      id: 6,
      name: "B&G",
      quantity:1,
    },
  ];

  return (
    <div className="container mx-auto md:w-[85%] w-[95%] flex lg:flex-row flex-col xl:flex-nowrap flex-wrap xl:justify-between justify-center mt-[4rem]">
      <ProductTitle title={"Features"} subTitle={"Features Products"} className="mx-auto" />
      <ul className="relative last:flex lg:flex-nowrap flex-wrap lg:justify-center lg:items-end justify-start sm:gap-12 gap-4 sm:mt-0 mt-3 mx-auto">
        {navItems.map((item) => (
          <li
            className="relative sm:text-[16px] text-[13px] uppercase font-[700] text-[#8d8d8d] hover:text-green-600 active:text-green-600 cursor-pointer"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.name}
            {num === item.quantity  && <p className="absolute top-0 right-[-10px] text-[12px]">{num}</p> }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductNavigation;
