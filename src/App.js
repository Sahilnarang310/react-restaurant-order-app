import React, {Fragment} from "react";
import Header from'./components/Layout/Header';
import HeaderCardButton from "./components/Layout/HeaderCardButton";
import Meals from "./components/Meals/Meals"

function App(){
  return(
    <div>
      <Header />
      <HeaderCardButton/>
      <main>
        <Meals />
      </main>
    </div>
  );
}
export default App;