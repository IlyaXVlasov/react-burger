import React from "react";
import orderStyles from "./OrderModal.module.css";
import svg from "../../image/done.svg";
import PropTypes from "prop-types";

const OrderModal = (props) => {
  const { orderNumber } = props;

  return (
    <ul className={orderStyles.list}>
      <li>
        <span className="text text_type_digits-large mt-30 ml-25 mr-25 mb-8">
          {orderNumber}
        </span>
      </li>
      <li>
        <p className={`${orderStyles.text} text text_type_main-medium`}>
          идентификатор заказа
        </p>
      </li>
      <li>
        <div className={`${orderStyles.svg} mt-15 mb-15`}>
          <img src={svg} alt="Принято" />
        </div>
      </li>
      <li>
        <p className="text text_type_main-small mb-2">
          Ваш заказ начали готовить
        </p>
      </li>
      <li>
        <p className="text text_type_main-default text_color_inactive mb-30">
          Дождитесь готовности на орбитальной станции
        </p>
      </li>
    </ul>
  );
};

OrderModal.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};

export default OrderModal;
