import React from "react";
import burgerStyles from "./BurgerConstructor.module.css";
import { data } from "../../utils/data.js";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
//import { isTemplateExpression } from "typescript";

const BreadHeight = () => {
  return (
    <ConstructorElement
      type="top"
      isLocked={true}
      text="Краторная булка N-200i (верх)"
      price={200}
      thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
    />
  );
};

const BreadBottom = () => {
  return (
    <ConstructorElement
      type="bottom"
      isLocked={true}
      text="Краторная булка N-200i (низ)"
      price={200}
      thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
    />
  );
};

const Stuffing = (props) => {
  return (
    <li key={props._id} className={`${burgerStyles.cell} mb-4`}>
      <DragIcon />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image}
      />
    </li>
  );
};

const BurgerConstructor = () => {
  return (
    <section className={`${burgerStyles.container} mt-25 ml-10`}>
      <div className={`${burgerStyles.box} mr-4 ml-4`}>
        <BreadHeight />
      </div>
      <div className={burgerStyles.scroll}>
        <div className={burgerStyles.wrapper}>
          <ul className={`${burgerStyles.list} mt-4 mr-4 ml-4`}>
            {data.map((item) => {
              if (item["type"] === "bun") {
                return null;
              }
              return Stuffing(item);
            })}
          </ul>
        </div>
      </div>
      <div className={`${burgerStyles.box} ml-4 mr-4 mb-10 `}>
        <BreadBottom />
      </div>
      <div className={`${burgerStyles.result} mr-4`}>
        <span
          className={`${burgerStyles.amount} text text_type_main-large mr-5`}
        >
          610
        </span>
        <svg className={`${burgerStyles.icon} mr-10`}>
          <CurrencyIcon />
        </svg>
        <Button type="primary" size="small">
          {" "}
          Оформить заказ{" "}
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
