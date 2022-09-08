import {
  CurrencyIcon,
  Counter,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import productStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ingredient } from "../../services/actions/actions";

const Menu = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <nav className={productStyles.menu}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </nav>
  );
};

const MarkupCardBurger = ({ item, onClick }) => {
  return (
    <ul
      onClick={() => onClick(item)}
      key={item._id}
      className={`${productStyles.list} mb-8`}
    >
      <li className={`${productStyles.cell} mb-2 ml-8 mr-8`}>
        <Counter count={0} size="small" />
        <img src={item.image} alt={item.image}></img>
      </li>
      <li className={`${productStyles.cell} mb-2`}>
        {item.price} <CurrencyIcon />
      </li>
      <li className={`${productStyles.cell} mb-2 ml-4 mr-2`}>
        <p className={`${productStyles.text} text_type_main-default`}>
          {item.name}
        </p>
      </li>
    </ul>
  );
};

const BurgerIngredients = ({ onClick }) => {
  const dispatch = useDispatch();
  dispatch(ingredient());
  return (
    <section className={`${productStyles.ingredients} mt-1`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Menu />
      <div className={productStyles.scroll}>
        <div className={productStyles.wrapper}>
          <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
          <div className={productStyles.box}>
            {items
              .filter((item) => item["type"] === "bun")
              .map((item) => {
                return (
                  <MarkupCardBurger
                    item={item}
                    onClick={() => onClick(item)}
                    key={item._id}
                    clicked={onClick}
                  />
                );
              })}
          </div>
          <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
          <div className={productStyles.box}>
            {items
              .filter((item) => item["type"] === "sauce")
              .map((item) => {
                return (
                  <MarkupCardBurger
                    item={item}
                    onClick={() => onClick(item)}
                    key={item._id}
                    clicked={onClick}
                  />
                );
              })}
          </div>
          <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
          <div className={productStyles.box}>
            {items
              .filter((item) => item["type"] === "main")
              .map((item) => {
                return (
                  <MarkupCardBurger
                    item={item}
                    onClick={() => onClick(item)}
                    key={item._id}
                    clicked={onClick}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  onClick: PropTypes.func.isRequired,
};

MarkupCardBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default BurgerIngredients;
