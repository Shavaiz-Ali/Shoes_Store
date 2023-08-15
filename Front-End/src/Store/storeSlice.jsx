import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    products: [],
    isLoading: false,
    error: null,
};


const storeSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        AllCartProducts(state, action){
            state.allProducts = [...action.payload]
            console.log(action.payload)
        },
        addToCart(state, action) {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }

            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(state));
        },
        increaseQuantity(state, action) {
            const item = state.products.find(
                (item) => item.id === action.payload
            );
            if (item) {
                item.quantity++;
            }

            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(state));
        },
        decreaseQuantity(state, action) {
            const item = state.products.find(
                (item) => item.id === action.payload
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        filterByRange(state, action){
            const filterData = state.allProducts.filter((items) => items.price >= action.payload);
            state.products = filterData
            console.log(state.products)
        },
        deleteItem(state, action) {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
        Reset(state) {
            state.products = [];
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    Reset,
    filterByRange,
    deleteItem,
} = storeSlice.actions;

export default storeSlice.reducer;
