import React from "react";
import classes from "./Header.module.css";
import image from "./meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      
      <div className={classes["main-image"]}>
        <img src={image} alt="A beautiful meal pic" />
      </div>
    </>
  );
};

export default Header;
