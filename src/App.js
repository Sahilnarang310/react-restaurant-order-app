import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  const [cardIsShown,setCardIsShown]=useState(false);
  const showCartShownHandler=()=>{
    setCardIsShown(true);
  }
  const hideCartShownHandler=()=>{
    setCardIsShown(false);
  }
  return (
    <>
      {cardIsShown && <Cart onClose={hideCartShownHandler}/>}
      <Header onShowCart={showCartShownHandler}  />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
