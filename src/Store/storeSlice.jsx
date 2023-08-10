
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading:false,
    error: null,
}
const storeSlice = createSlice({
    name: "users",
    initialState,
    reducers :{
        addToCart(state, action){
            const item = state.products.find(
                (item) => item.id === action.payload.id
              );
              if (item) {
                item.quantity += action.payload.quantity;
                console.log(item.quantity, "Quantity", item)
              } else {
                state.products.push(action.payload);
              }
        },
        increaaseQuantity(state, action){
            const item = state.products.find(
                (item) => item.id === action.payload
              );
              if (item) {
                item.quantity++;
              }   
        },
        decreseQuantity(state, action){
            const item = state.products.find(
                (item) => item.id === action.payload
              );
              if (item.quantity === 1) {
                item.quantity = 1;
              } else {
                item.quantity--;
              }
        },
        deleteItem(state, action){
            console.log("Delete item reducer is called");
             state.products = state.products.filter((item) => item.id !== action.payload)

          },
        Reset(state){
            state.products = [];
        },
    },
});
export const {addToCart, increaaseQuantity, decreseQuantity, Reset, deleteItem} = storeSlice.actions
export default storeSlice.reducer