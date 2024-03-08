import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ProductInfoType {
  id: number;
  price: number;
  finalItem: number;
  imgSrc?: string;
  title?: string;
}

interface initialStateType {
  counter: number;
  productInfo: ProductInfoType[];
}

const initialState: initialStateType = {
  counter: 1,
  productInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInfoType>) => {
      const { id, price, finalItem, imgSrc, title } = action.payload;

      const existingItemIndex = state.productInfo.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        // If item already exists, update quantity
        state.productInfo[existingItemIndex].finalItem += state.counter;
      } else {
        // If item doesn't exist, add it to the cart
        state.productInfo.push({ id, finalItem, price, imgSrc, title });
      }
    },
    increaseCounter: (state) => {
      state.counter += 1;
    },
    decreaseCounter: (state) => {
      if (state.counter > 1) state.counter -= 1;
    },
    increaseFinalItem: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.productInfo.findIndex(
        (item) => item.id === action.payload
      );
      if (existingItemIndex !== -1) {
        state.productInfo[existingItemIndex].finalItem += 1;
      }
    },
    decreaseFinalItem: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.productInfo.findIndex(
        (item) => item.id === action.payload
      );
      {
        if (
          existingItemIndex !== -1 &&
          state.productInfo[existingItemIndex].finalItem > 1
        ) {
          state.productInfo[existingItemIndex].finalItem -= 1;
        }
      }
    },
    resetCounter: (state) => {
      state.counter = 1;
    },
    resetCart: (state) => {
      state.productInfo = [];
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
  resetCart,
} = cartSlice.actions;
export const selectTotalPrice = (state: { cart: initialStateType }) => {
  return state.cart.productInfo.reduce(
    (total, item) => total + item.price * item.finalItem,
    0
  );
};

export default cartSlice.reducer;
