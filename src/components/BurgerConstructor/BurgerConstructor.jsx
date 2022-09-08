import burgerStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { baseUrl } from "../App/App";
import checkResponse from "../../utils/checkResponse";
import { constructor } from "../../services/actions/actions";

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
  const dispatch = useDispatch();
  const productId = dispatch(constructor());
  //.map((item) => item._id);
  const postOrder = () => {
    fetch(`${baseUrl}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: productId,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        setOrderData(res);
      })
      .catch((error) => {
        console.log(error);
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
            {items.map((item) => {
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
          {items
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
            postOrder();
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

export default BurgerConstructor;
