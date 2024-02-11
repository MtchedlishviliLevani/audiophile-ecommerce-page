import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { cartPageContent } from "../../data";

// interface Cart {
//   sumItems: number;
//   title: string;
//   price: number;
//   singleProductItems: number;
//   totalPrice: number;
// }

const initialProduct = cartPageContent.XX99MARKII;
interface initialType {
  id: number;
  counter: number;
  price: number;
  finalItem: number;
  imgSrc: string;
  title: string;
}

const initialState: initialType[] = [
  {
    id: initialProduct.productId,
    counter: 1,
    price: initialProduct.price,
    finalItem: 2,
    imgSrc: initialProduct.productMainImg.mobile,
    title: initialProduct.shortTitle,
  },
];

//resy

//
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<initialType>) => {
      const { id, price, counter, finalItem, imgSrc, title } = action.payload;

      const existingItemIndex = state.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // If item already exists, update quantity
        state[existingItemIndex].finalItem += counter;
      } else {
        // If item doesn't exist, add it to the cart
        state.push({ id, finalItem, counter, price, imgSrc, title });
      }
    },
    increaseCounter: (state) => {
      // Check if there are items in the cart before modifying the counter

      state[0].counter += 1;
    },
    decreaseCounter: (state) => {
      // Check if there are items in the cart before modifying the counter

      state[0].counter -= 1;
    },
    increaseFinalItem: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      if (existingItemIndex !== -1) {
        state[existingItemIndex].finalItem += 1;
      }
    },
    decreaseFinalItem: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      {
        if (
          existingItemIndex !== -1 &&
          state[existingItemIndex].finalItem > 1
        ) {
          state[existingItemIndex].finalItem -= 1;
        }
      }
    },
    resetCounter: (state) => {
      state[0].counter = 1;
    },
  },
});

export const {
  addToCart,
  increaseCounter,
  decreaseCounter,
  resetCounter,
  increaseFinalItem,
  decreaseFinalItem,
} = cartSlice.actions;
export const selectTotalPrice = (state: { cart: initialType[] }) => {
  return state.cart.reduce(
    (total, item) => total + item.price * item.finalItem,
    0
  );
};

export default cartSlice.reducer;
