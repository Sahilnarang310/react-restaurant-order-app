
import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cardIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  };

  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <div>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {cardIsShown && (
        <div className="cart">
          <h2>Cart</h2>
          <button onClick={hideCartHandler}>Close Cart</button>
        </div>
      )}
    </div>
  );
}

export default App;