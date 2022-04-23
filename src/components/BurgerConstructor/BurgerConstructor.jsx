import React, { useContext, useState } from "react";
import burgerStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ProductContex, HendleContex } from "../../contex";
import { baseUrl } from "../App/App";
import Modal from "../Modal/Modal";
import OrderModal from "../OrderModal/OrderModal";

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

const BurgerConstructor = (props) => {
  const { onClickSendOrder, setOrderData } = props;
  //const setOrder = useContext(HendleContex);
  const product = useContext(ProductContex);

  const answer = () => {
    fetch(`${baseUrl}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: ["60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733cc"],
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject("Ошибка")))
      .then((res) => {
        setOrderData(res);
      });
  };
  return (
    <section className={`${burgerStyles.container} mt-25 ml-10`}>
      <div className={`${burgerStyles.box} mr-4 ml-4`}>
        <BreadHeight />
      </div>
      <div className={burgerStyles.scroll}>
        <div className={burgerStyles.wrapper}>
          <ul className={`${burgerStyles.list} mt-4 mr-4 ml-4`}>
            {product.map((item) => {
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
          {product
            .filter((item) => item["type"] === "main")
            .reduce((acc, item) => {
              return acc + item["price"];
            }, 0)}
        </span>
        <svg className={`${burgerStyles.icon} mr-10`}>
          <CurrencyIcon />
        </svg>

        <Button
          onClick={() => {
            answer();
            onClickSendOrder(true);
          }}
          type="primary"
          size="small"
        >
          {" "}
          Оформить заказ{" "}
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  onClickSendOrder: PropTypes.func.isRequired,
};

Stuffing.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerConstructor;
