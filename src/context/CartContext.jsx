import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  items: {}
};

function reducer(state, action) {
  const items = { ...state.items };
  switch (action.type) {
    case "ADD": {
      const p = action.product;
      if (items[p.id]) return state;
      items[p.id] = { product: p, qty: 1 };
      return { ...state, items };
    }
    case "REMOVE": {
      delete items[action.id];
      return { ...state, items };
    }
    case "INCREASE": {
      if (!items[action.id]) return state;
      items[action.id] = { ...items[action.id], qty: items[action.id].qty + 1 };
      return { ...state, items };
    }
    case "DECREASE": {
      if (!items[action.id]) return state;
      const newQty = items[action.id].qty - 1;
      if (newQty <= 0) {
        delete items[action.id];
      } else {
        items[action.id] = { ...items[action.id], qty: newQty };
      }
      return { ...state, items };
    }
    case "SET": {
      return { ...state, items: action.items };
    }
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCart() {
  return useContext(CartStateContext);
}
export function useDispatchCart() {
  return useContext(CartDispatchContext);
}
