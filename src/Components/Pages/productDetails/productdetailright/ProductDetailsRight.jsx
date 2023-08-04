import {useState, useEffect} from "react"
import {FaAngleRight} from "react-icons/fa6"
import {AiOutlineShareAlt} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import { SideData } from "../../../../Constants/Constants"
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from "../../../../Store/storeSlice"
const ProductDetailsRight = () => {
  const [productInfo, setProductInfo] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch()
    useEffect(() => {
      if (location.state?.item) {
        setProductInfo(location.state.item);
      }
    }, [location.state?.item]);

  return (
    <div className="md:mx-0 mx-auto sm:p-0 p-2">
      <h1 className="flex flex-col sm:text-[30px] text-[24px] font-[700]">AIR STRONG TRINING
      </h1>
      <p className="text-[14px] text-[#999] font-[400] ">Mens Shoes, Nike, Jordan</p>
      <h1 className="text-[30px] mb-[5px]">$1233
        <del className="text-[14px] ml-2">$2234</del>
      </h1>
      <h1 className="text-[18px] mb-[10px] font-[600]">Quick Review</h1>
      <hr />
      <p className="text-[14px] text-[#5b5b5b] leading-[1.8em] mt-[10px]">The Nike Free RN 2017 Mens Running Shoe weighs less <br /> than previous versions and features an updated knit <br /> material…</p>
      <h1 className="text-[18px] mb-[10px] font-[600]">Choose Your Style</h1>
      <hr />
      <div className="flex gap-5 my-[10px]">
        {
          SideData.map((item) => {
            return(
              <img key={ item.id } src={ item.image } alt="" className={`sm:h-16 sm:w-16 h-14 w-14 border-2  border-slate-400/[0.50] cursor-pointer transtion-all duration-500 ease-in`}/>
            )
          })
        }
      </div>
      <h1 className="text-[18px] mb-[10px] font-[600]">Choose Size</h1>
      <hr />
      <div className="flex sm:justify-between justify-center mt-[10px] gap-3 mx-auto">
        <select className="bg-black/[0.15] sm:w-[210px] w-[190px] h-[55px] text-[20px] font-[300] px-4 rounded border-0 outline-none" >
          <option value="Select Size" className="focus:bg-green-500">Select Size</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="number" placeholder="1" className="bg-black/[0.15]  sm:w-[150px] w-[90px] h[55px] text-[20px] font-[300] px-4 rounded border-0 outline-none"/>
      </div>

      <div className="flex items-baseline justify-center gap-3">
        <div className="button">
        <button className='flex justify-center gap-5 items-center sm:text-[18px] text-[16px] text-white bg-[#2AC37D] py-4 px-6 rounded-[50px] sm:w-[230px] w-[180px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out' onClick={() => dispatch(
          addToCart(productInfo )
        )}>Add to cart <FaAngleRight className="text-xl text-white"
        /> </button>
        </div>
        <div className="flex justify-center items-center bg-black/[0.50] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] py-3 rounded-full cursor-pointer hover:bg-[#2AC37D] transition-all duration-300 ease-in">
          <AiOutlineHeart className="sm:text-[20px] text-[16px] text-white"/>
        </div>
        <div className="flex justify-center items-center bg-black/[0.50] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] py-3 rounded-full cursor-pointer hover:bg-[#2AC37D] transition-all duration-300 ease-in">
          <AiOutlineShareAlt className="sm:text-[20px] text-[16px] text-white"/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsRight
