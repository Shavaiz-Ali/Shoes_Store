import  { useState } from "react";
import ProductNavigation from "./ProductNavigation";
import { ProductData } from "../../../Constants/Constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState("All");

  const handleproductdetails = (item) => {
    navigate(`/product/${item.id}`, {
      state: { item },
    });
  };
  let number = [];
  const filteredProducts = selectedBrand === "All" ? ProductData : ProductData.filter((item) => {
    
    if( item.brand === selectedBrand){
        number.push(item)
        console.log(ProductData.length)
        console.log(item)
        return true
      } 

     return false
  });
  console.log(number)
  const Quantity = number.length
  return (
    <>
      <ProductNavigation num={Quantity} setSelectedBrand={setSelectedBrand} />
      <div className="container mx-auto md:w-[85%] w-[95%]" data-aos="zoom-out-down">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 my-5">
          {filteredProducts.map((item) => (
            <div key={item.id} className="relative" data-aos="fade-up">
              <Link to={`/product`} onClick={() => handleproductdetails(item)}>
                <img src={item.image} alt="" className="hover:scale-[1.03] transition-all ease-in duration-300" />
              </Link>
              <div className="flex justify-between items-center z-50">
                <h2 className="flex flex-col text-[16px] font-semibold">
                  {item.name}
                  <span className="text-[14px] text-black/[0.50] font-normal">{item.subTitle}</span>
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
