import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// State
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // de initial state bevat een items property met een lege array.
      // er wordt een action gedispatched met als payload het volledige headphone object
      // de nieuwe state bevat nu 1 element in de array en dit is een headphone object.
      // er wordt door alle elementen van de items array gelooped om te checken of de id van het item dat nu in de state zit hetzelfde is als het id van het object dat door de action is gedispatched.
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      // als het item al in de cart zit dan moet alleen de quantity geupdated worden
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
        toast.success("item added to shoppingcart", {
          position: "top-right",
          theme: "colored",
        });
        // zo niet, dan moet het item in de cart gepushed worden.
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
        toast.success("item added to shoppingcart", {
          position: "top-right",
          theme: "colored",
        });
      }
    },

    incrementQuantity: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;

        // Het else if deel is bedoeld om het item te verwijderen als hij minder dan 1 is
      } else if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    calculateTotal: (state) => {
      let totalQuantity = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      });
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
