import  { useState } from "react";
import ProductNavigation from "./ProductNavigation";
import { ProductData } from "../../../Constants/Constants";
// import { ProductsData } from "../../Data/ProductsData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [activetab, SetActivetab] = useState("All");

  const handleproductdetails = (item) => {
    if(item?.id){
      navigate(`/product/${item?.id}`, {
        state: { item },
      });
    }  
  };
  const filteredProducts = selectedBrand === "All" ? ProductData : ProductData.filter(item => item.brand === selectedBrand)
  const Tabnum = activetab === "All" ? filteredProducts.length : filteredProducts.filter(item => item.length === activetab.length)
  return (
    <>
      <ProductNavigation  setSelectedBrand={setSelectedBrand} num={Tabnum} activetab={SetActivetab}/>
      <div className="container mx-auto md:w-[85%] w-[95%]" data-aos="zoom-out-down">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 my-5">
          {filteredProducts.map((item) => (
            <div key={item.id} className="relative " data-aos="fade-up">
              <Link className="aspect-w-2 aspect-h-2 overflow-hidden" to={`/product/${item.id}`} onClick={() => handleproductdetails(item)}>
                <img src={item.image} alt="" className="hover:scale-[1.03] transition-all ease-in duration-300 w-[400px] h-[250px]" />
              </Link>
              <div className="flex justify-between items- z-50 gap-4">
                <h2 className="flex flex-col text-[14px] font-semibold">
                  {item.name}
                  <span className="text-[14px] text-black/[0.50] font-normal">{item.subTitle}</span>
                </h2>
                <p className="text-[16px] font-semibold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
