import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  decreseQuantity,
  increaaseQuantity,
} from "../../../Store/storeSlice";
const ItemsCard = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className="md:grid grid-cols-12  md:place-items-center items-start flex flex-col justify-start gap-5  bg-black/[0.15] my-5 py-5 rounded px-4">
      <div className="flex flex-col items-start md:col-span-4 col-span-6 ">
       <h1 className="md:hidden text-xl text-black font-[600]">Product Name</h1>
          <div className="flex items-center mt-1 gap-3">
            <span onClick={() => dispatch(
              deleteItem(item.id)
            )}>
            <ImCross className="cursor-pointer"/>
            </span>
            <img src={item.image} alt="" className="w-[100px] h-[100px]"/>
            <h1 className="sm:text-xl text-[18px] font-[600]">{item.name}</h1>
          </div>
      </div>

      <div className="flex flex-col md:col-span-4 col-span-6">
      <p className="md:hidden text-xl text-black font-[600] col-span-4">Quantity</p>
          <div className="flex items-center mt-1">
            <span className="w-[50px] h-[45px] bg-black text-white sm:text-2xl text-[16px] flex items-center justify-center hover:bg-black/[0.70] cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300" onClick={() => dispatch(
              decreseQuantity(item.id)
            )}>-</span>

            <h1 className="w-[110px] h-[45px] text-xl bg-gray-100 flex justify-center items-center">{item.quantity }</h1>

            <span className="w-[50px] h-[45px] bg-black text-white sm:text-2xl text-[16px] flex items-center justify-center hover:bg-black/[0.70] cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"onClick={() => dispatch(
              increaaseQuantity(item.id)
            )}>+</span>
          </div>
      </div>

      <div className="md:col-span-2 col-span-6">        
          <p className="md:hidden text-xl  text-black font-[600] col-span-2">Price</p>
          <h1 className="text-xl font-[600] mt-1">${item.price }</h1>
      </div>

      <div className="md:col-span-2 col-span-6">        
          <p className="md:hidden text-xl  text-black font-[600] col-span-2">Sub Total</p>
          <h1 className="text-xl font-[600] mt-1">${item.price * item.quantity}</h1>
      </div>
    </div>
  )
}

export default ItemsCard
