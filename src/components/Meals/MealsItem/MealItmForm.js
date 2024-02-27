import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItmForm = (props) => {
  const amountRef = useRef();
  const [amountIsValid,setAmountIsValid]=useState(true);
  const submitHandler=event=>{
    event.preventDefault();
    const amount= amountRef.current.value;
    const numberAmount= parseInt(amount);
    if(amount.trim().length === 0 || numberAmount < 1 || numberAmount>5){
      setAmountIsValid(false);
      return;
    }
      setAmountIsValid(true);
      props.onAddToCart(numberAmount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "Amount",
          type: "Number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter valid amount(1-5)</p>}
    </form>
  );
};

export default MealItmForm;
