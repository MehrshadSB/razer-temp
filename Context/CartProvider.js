"use client";
import { sumProducts } from "@/helper/helper";
import {
  createContext,
  useEffect,
  useReducer,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  CHECKOUT: "CHECKOUT",
};

const initalState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    case ACTIONS.REMOVE_ITEM:
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumProducts(newSelectedItem),
      };
    case ACTIONS.INCREASE:
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case ACTIONS.DECREASE:
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case ACTIONS.CHECKOUT:
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("invalid Data Type!");
  }
};

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [state, disPatch] = useReducer(reducer, initalState);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));

    const setCartToState = () => {
      setCart(state);
    };

    if (!cart) {
      setCartToState();
    } else {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, disPatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, disPatch } = useContext(CartContext);
  return [state, disPatch];
};

export { useCart, ACTIONS };
export default CartProvider;
