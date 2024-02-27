import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../cart/CartIcon'
import CartContext from '../../store/cart-context'
const HeaderCardButton = (props) => {
  const cartCtx=useContext(CartContext);
  const numberOfItems=cartCtx.items.reduce((currValue,item)=>{return currValue=currValue+item.amount},0);
  return (
    <button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart </span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
  )
}

export default HeaderCardButton