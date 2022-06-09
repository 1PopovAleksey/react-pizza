import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title='Мексиканская' price={599}/>
            <PizzaBlock title='Вкусная' price={599}/>
            <PizzaBlock title='Не вкусная' price={599}/>
            <PizzaBlock title='Обычная' price={599}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
