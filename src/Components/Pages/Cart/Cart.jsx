import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCard from "./ItemsCard"
import { Reset } from "../../../Store/storeSlice";
// import { emptyCart } from "../../assets/images/index";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.users.products);
  const [totalAmt, setTotalAmt] = useState("");
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
    <div className="container mx-auto overflow-hidden">
      { products.length > 0 ? (
        <div>
          <div className="grid grid-cols-12 place-items-center  bg-black/[0.15] my-5 py-5 rounded">
            <h1 className="text-xl text-black font-[600] col-span-4">Products</h1>
            <p className="text-xl text-black font-[600] col-span-4">Quantity</p>
            <p className="text-xl text-black font-[600] col-span-2">Price</p>
            <p className="text-xl text-black font-[600] col-span-2">Sub Total</p>
          </div>
          <hr />
          <div className="mt-5">
            {products.map((item) => {
              return(
                <div key={item._id}>
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

          <div className="flex justify-between items-center border border-black/[0.15] py-4 px-8">
            <div className="flex items-center gap-4">
              <input type="text" placeholder="Coupon Number" className="w-[200px] px-3 h-[40px] text-[14px] border border-black/[0.15]"/>
              <h1 className="text-[18px] font-[600]">Apply Coupon</h1>
            </div>
              <h1 className="text-[18px] font-[600]">Update Cart</h1>
          </div>

          <div className="flex flex-col justify-items-end items-end my-[20px]">
            <h1 className="text-[24px] font-[600]">Cart Total</h1>
              <div className="flex flex-col border justify-between border-black/[0.15] w-[350px] mt-4">
                  <h1 className="flex justify-between text-xl font-[600] py-2 px-3">SubTotal
                    <span>{totalAmt}</span>
                  </h1>
                  <h1 className="flex justify-between border-t border-black/[0.15] text-xl font-[600] py-2 px-3">Shipping Charges
                    <span>{shippingCharge}</span>
                  </h1>
                  <h1 className="flex justify-between border-t border-black/[0.15] text-xl font-[600] py-2 px-3">Total
                    <span>{totalAmt + shippingCharge}</span>
                  </h1>
              </div>
            <button className="w-[250px] h-[40px] text-white bg-black border-0 outline-none mt-4">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className="text-[3rem] text-black font-[700] uppercase flex justify-center items-center transtion-all duration-700 ease-in-out scale-110 h-[50vh]">
         <h1> Cart is Empty</h1>
        </div>
      )
      }
    </div>
  )
}

export default Cart
