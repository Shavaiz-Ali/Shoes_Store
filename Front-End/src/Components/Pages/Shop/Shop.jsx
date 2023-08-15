import SideBar from "./SideBar/SideBar";
import ShopContent from "./ShopContent/ShopContent";
import { ProductData } from "../../../Constants/Constants";
import { useState } from "react";
const Shop = () => {
  const [categorizedItem, setCategorizedItem] = useState("Life");
  const filteredProductsItems = categorizedItem === "Life" ? ProductData : ProductData.filter(item => item.category === categorizedItem);
  return (
    <div className="mx-auto lg:flex " >
        <SideBar setCategorizedItem={setCategorizedItem}/>
        <ShopContent filteredProducts={filteredProductsItems} />
    </div>
  )
}

export default Shop
