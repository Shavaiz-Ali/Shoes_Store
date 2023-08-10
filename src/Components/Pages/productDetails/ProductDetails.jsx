import {useState, useEffect} from "react"
import { useLocation } from "react-router-dom";
import ProductDetailsRight from "./productdetailright/ProductDetailsRight";
import { SideData } from "../../../Constants/Constants";
// import { useSelector } from "react-redux";
const ProductDetails = () => {
    const [productInfo, setProductInfo] = useState([]);
    const location = useLocation();
    // const products = useSelector((state) => state.users.products);
      useEffect(() => {
        if (location.state?.item) {
          setProductInfo(location.state.item);
        }
      }, [location.state?.item]);
  return (
    <div className='container mx-auto' data-aos="zoom-in">
        {/* product images  */}
        <div className=" flex md:flex-row flex-col justify-center my-[4rem] gap-10">
          <div className="flex lg:flex-row flex-col justify-center gap-5 ">
            <div className="flex lg:flex-col flex-row sm:gap-5 gap-2">
                {
                    SideData.map((item) => {
                        return(
                            <img key={ item.id } src={ item.image } alt="" className={`sm:h-16 sm:w-16 h-14 w-14 border-2 $ "border-slate-400/[0.50]" cursor-pointer transtion-all duration-500 ease-in`}/>
                        )
                    })
                }
            </div>
            <div className="large-image">
            <img src={productInfo.image} alt="" className="sm:h-[400px] sm:w-{500px}  hover:scale-[1.01] transtion-all duration-300 ease-in-out" />
          </div>
          </div>

          {/* product details  */}
          <ProductDetailsRight />
        </div>
      </div>
  )
}

export default ProductDetails
