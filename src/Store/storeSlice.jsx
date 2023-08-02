import {createSlice} from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const initialState = {
    products: getCartFromLocalStorage(),
}
const storeSlice = createSlice({
    name: "users",
    initialState,
    reducers :{
        addToCart(state, action){
            const item = state.products.find(
                (item) => item._id === action.payload._id
              );
              if (item) {
                item.quantity += action.payload.quantity;
              } else {
                state.products.push(action.payload);
              }
              saveCartToLocalStorage(state.products);
        },
        increaaseQuantity(state, action){
            const item = state.products.find(
                (item) => item._id === action.payload._id
              );
              if (item) {
                item.quantity++;
              }   
        },
        decreseQuantity(state, action){
            const item = state.products.find(
                (item) => item._id === action.payload._id
              );
              if (item.quantity === 1) {
                item.quantity = 1;
              } else {
                item.quantity--;
              }
        },
        deleteItem(state, action){
            console.log("Delete item reducer is called");
             state.products = state.products.filter((item) => item._id !== action.payload);
          },
        Reset(state){
            state.products = [];
            saveCartToLocalStorage(state.products);
        }
    },
});
export const {addToCart, increaaseQuantity, decreseQuantity, Reset, deleteItem} = storeSlice.actions
export default storeSlice.reducer