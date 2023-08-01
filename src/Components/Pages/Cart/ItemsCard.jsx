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
    <div className="grid grid-cols-12 place-items-center  bg-black/[0.15] my-5 py-5 rounded">
      <div className="flex items-center gap-5 col-span-4">
      <ImCross className="cursor-pointer" onClick={() => dispatch(
        deleteItem({_id:item._id})
      )}/>
      <img src={item.image_url} alt="" className="w-[100px] h-[100px]"/>
      <h1 className="text-xl font-[600]">{item.name}</h1>
      </div>
      <div className="flex col-span-4">
        <span className="w-[50px] h-[45px] bg-black text-white text-2xl flex items-center justify-center hover:bg-black/[0.70] cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300" onClick={() => dispatch(
          decreseQuantity({_id:item._id})
        )}>-</span>
        <h1 className="w-[130px] h-[45px] text-xl bg-gray-100 flex justify-center items-center">{item.quantity }</h1>
        <span className="w-[50px] h-[45px] bg-black text-white text-2xl flex items-center justify-center hover:bg-black/[0.70] cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"onClick={() => dispatch(
          increaaseQuantity({_id:item._id})
        )}>+</span>
      </div>
      <div className="col-span-2">        
          <h1 className="text-xl font-[600]">${item.price }</h1>
      </div>
      <div className="col-span-2">        
          <h1 className="text-xl font-[600]">${item.price * item.quantity}</h1>
      </div>
    </div>
  )
}

export default ItemsCard
