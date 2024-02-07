import SideBar from "./SideBar/SideBar";
import ShopContent from "./ShopContent/ShopContent";
import { ProductData } from "../../../Constants/Constants";
import { useState } from "react";
const Shop = () => {
  const [categorizedItem, setCategorizedItem] = useState("Life");
  const [BrandItem, setBrandItem] = useState("Nike");
  const filteredProductsItems = categorizedItem === "Life" ? ProductData : ProductData.filter((item) => { 
    if(item.category === categorizedItem){
      return item;
    } else if (item.brand === BrandItem){
      console.log(item)
      return item;
    }
  });
  return (
    <div className="mx-auto lg:flex " >
        <SideBar setBrandItem={setBrandItem} setCategorizedItem={setCategorizedItem}/>
        <ShopContent filteredProducts={filteredProductsItems} />
    </div>
  )
}

export default Shop
