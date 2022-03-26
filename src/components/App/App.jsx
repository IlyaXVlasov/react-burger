import React from "react";
import app from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients.jsx";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx";

class App extends React.Component {
  render() {
    return (
      <section>
        <AppHeader />
        <main className={app.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </section>
    );
  }
}

export default App;
