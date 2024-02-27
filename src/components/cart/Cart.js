import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "./../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const isOrder = cartCtx.items.length > 0;

  const addCartItemHandler=(item)=>{}
  const removeCartItemHandler=(id)=>{}

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            summary={item.description}
            amount={item.amount}
            price={item.price}
            onRemove={removeCartItemHandler.bind(null,props.id)}
            onAdd={addCartItemHandler.bind(null,item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={props.onClose}>
          Close
        </button>
        {isOrder && <button className={classes["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
