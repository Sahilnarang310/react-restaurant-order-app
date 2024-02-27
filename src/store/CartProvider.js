import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartItem = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex((item) => item.id == action.item.id);
    const existingCartItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: action.item.amount + existingCartItem.amount,
      };
      updatedItems = [...state.items];
      console.log(updatedItem);
      console.log(`23`);
      console.log(updatedItems);
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
  }
  return defaultCartItem;
};

const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartItem
  );
  const addItemHandler = (item) => {
    dispachCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispachCartAction({ type: "remove", id: id });
  };
  const cardContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cardContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
