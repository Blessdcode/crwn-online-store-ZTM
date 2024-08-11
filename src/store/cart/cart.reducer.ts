import { AnyAction } from "redux";

import { clearCart, setCartItems, setIsCartOpen } from "./cart.action";

import { CartItem } from "./cart.type";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  if (clearCart.match(action)) {
    return {
      ...state,
      cartItems: [],
    };
  }

  return state;

  /**
   * 
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CLEAR_CART:
      return {
        ...state,
        cartItems: [],
       
      };
    default:
      return state;
  }
      * 
      */
};
