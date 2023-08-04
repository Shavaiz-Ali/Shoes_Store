import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCard from "./ItemsCard"
import { Reset } from "../../../Store/storeSlice";
// import { emptyCart } from "../../assets/images/index";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.users.products);
  const [totalAmt, setTotalAmt] = useState("");
  console.log(products)
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className="container mx-auto overflow-hidden" data-aos="zoom-in">
      { products.length > 0 ? (
        <div>
          <div className="md:grid lg:grid-cols-12 grid-cols-12 place-items-center  bg-black/[0.15] my-5 py-5 rounded hidden ">
            <h1 className="md:text-xl sm:text-[16px] text-[13px] text-black font-[600] col-span-4">Products</h1>
            <p className="md:text-xl sm:text-[16px] text-[13px] text-black font-[600] col-span-4">Quantity</p>
            <p className="md:text-xl sm:text-[16px] text-[13px] text-black font-[600] col-span-2">Price</p>
            <p className="md:text-xl sm:text-[16px] text-[13px] text-black font-[600] col-span-2">Sub Total</p>
          </div>
          <hr />
          <div className="mt-5">
            {products.map((item) => {
              return(
                <div key={item.id}>
                  <ItemCard item={item}/>
                </div>
              )
            })}
          </div>
          <button
            onClick={() => dispatch(Reset())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex justify-between items-center border border-black/[0.15] py-4 sm:px-8 px-1">
            <div className="flex  items-center sm:gap-4 gap-1">
              <input type="text" placeholder="Coupon Number" className="sm:w-[200px] w-[100px] px-2 h-[40px] text-[14px] border border-black/[0.15]"/>
              <h1 className="sm:text-[18px] text-[13px] sm:font-[600] font-[300]">Apply Coupon</h1>
            </div>
              <h1 className="sm:text-[18px] text-[13px] sm:font-[600] font-[300]">Update Cart</h1>
          </div>

          <div className="flex flex-col justify-items-end items-end my-[20px]">
            <h1 className="text-[24px] font-[600]">Cart Total</h1>
              <div className="flex flex-col border justify-between border-black/[0.15] sm:w-[350px] w-[95%] mt-4">
                  <h1 className="flex justify-between md:text-xl sm:text-[16px] text-[13px] font-[600] py-2 px-3">SubTotal
                    <span>{totalAmt}</span>
                  </h1>
                  <h1 className="flex justify-between border-t border-black/[0.15] md:text-xl sm:text-[16px] text-[13px] font-[600] py-2 px-3">Shipping Charges
                    <span>{shippingCharge}</span>
                  </h1>
                  <h1 className="flex justify-between border-t border-black/[0.15] md:text-xl sm:text-[16px] text-[13px] font-[600] py-2 px-3">Total
                    <span>{totalAmt + shippingCharge}</span>
                  </h1>
              </div>
            <button className="w-[250px] h-[40px] text-white bg-black border-0 outline-none mt-4">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className=" text-[3rem] text-black font-[700] uppercase flex flex-col justify-center items-center transtion-all duration-700 ease-in-out scale-110 h-[50vh]">
          <h1> Cart is Empty</h1>
          <Link to={"/"} className='flex justify-center items-center text-[16px] py-3 text-white bg-[#2AC37D] rounded-[50px] w-[200px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out'>Continue Shopping</Link>
        </div>
      )
      }
    </div>
  )
}

export default Cart
