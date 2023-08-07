import  { useState } from "react";
import ProductNavigation from "./ProductNavigation";
import { ProductData } from "../../../Constants/Constants";
import { ProductsData } from "../../Data/ProductsData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [activetab, SetActivetab] = useState("All")
  const handleproductdetails = (item) => {
    navigate(`/product/${item.id}`, {
      state: { item },
    });
  };
  const filteredProducts = selectedBrand === "All" ? ProductsData : ProductsData.filter(item => item.brand === selectedBrand)
  const Tabnum = activetab === "All" ? filteredProducts.length : filteredProducts.filter(item => item.length === activetab.length)
  return (
    <>
      <ProductNavigation activTab={SetActivetab} num={Tabnum} setSelectedBrand={setSelectedBrand} />
      <div className="container mx-auto md:w-[85%] w-[95%]" data-aos="zoom-out-down">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 my-5">
          {filteredProducts.map((item) => (
            <div key={item.id} className="relative" data-aos="fade-up">
              <Link to={`/product`} onClick={() => handleproductdetails(item)}>
                <img src={item.image} alt="" className="hover:scale-[1.03] transition-all ease-in duration-300 h-[300px] w-[300px]" />
              </Link>
              <div className="flex justify-between items-center z-50">
                <h2 className="flex flex-col text-[16px] font-semibold">
                  {item}
                  <span className="text-[14px] text-black/[0.50] font-normal">{item.name}</span>
                </h2>
                <p className="text-[16px] font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
