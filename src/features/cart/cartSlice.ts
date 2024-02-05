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
    resetList: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  increaseCounter,
  decreaseCounter,
  resetCounter,
  resetList,
  increaseFinalItem,
  decreaseFinalItem,
} = cartSlice.actions;
export const selectTotalPrice = (state: { cart: initialType[] }) => {
  return state.cart.reduce(
    (total, item) => total + item.price * item.finalItem,
    0
  );
};

// interface CartItem {
//   productId: number;
//   quantity: number;
//   price: number;
// }

// interface CartState {
//   items: CartItem[];
//   isShown: boolean;
// }

// const initialState: CartState = {
//   items: [],
//   isShown: false,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItemToCart: (state, action: PayloadAction<CartItem>) => {
//       const { productId, quantity, price } = action.payload;
//       const existingItemIndex = state.items.findIndex(
//         (item) => item.productId === productId
//       );

//       if (existingItemIndex !== -1) {
//         // If item already exists, update quantity
//         state.items[existingItemIndex].quantity += quantity;
//       } else {
//         // If item doesn't exist, add it to the cart
//         state.items.push({ productId, quantity, price });
//       }

//       state.isShown = true;
//     },
//     removeItemFromCart: (state, action: PayloadAction<number>) => {
//       const productIdToRemove = action.payload;
//       state.items = state.items.filter(
//         (item) => item.productId !== productIdToRemove
//       );
//     },
//     updateCartItemQuantity: (
//       state,
//       action: PayloadAction<{ productId: number; quantity: number }>
//     ) => {
//       const { productId, quantity } = action.payload;
//       const itemToUpdate = state.items.find(
//         (item) => item.productId === productId
//       );

//       if (itemToUpdate) {
//         itemToUpdate.quantity = quantity;
//       }
//     },

//     toggleCartVisibility: (state) => {
//       state.isShown = !state.isShown;
//     },
//     resetCart: (state) => {
//       state.items = [];
//       state.isShown = false;
//     },
//     increaseByOne: (state, action: PayloadAction<number>) => {
//       const productIdToIncrease = action.payload;
//       const itemToIncrease = state.items.find(
//         (item) => item.productId === productIdToIncrease
//       );

//       if (itemToIncrease) {
//         itemToIncrease.quantity += 1;
//       }
//     },
//     decreaseByOne: (state, action: PayloadAction<number>) => {
//       const productIdToDecrease = action.payload;
//       const itemToDecrease = state.items.find(
//         (item) => item.productId === productIdToDecrease
//       );

//       if (itemToDecrease && itemToDecrease.quantity > 1) {
//         itemToDecrease.quantity -= 1;
//       }
//     },
//   },
// });

// export const {
//   addItemToCart,
//   removeItemFromCart,
//   updateCartItemQuantity,
//   toggleCartVisibility,
//   resetCart,
// } = cartSlice.actions;

export default cartSlice.reducer;
