import React from "react";
import detailsStyles from "./ModalDetails.module.css";
import PropTypes from "prop-types";

const ModalDetails = ({ item }) => {
  return (
    <ul className={`${detailsStyles.list}  ml-25 mr-25`}>
      <li>
        <img
          className={detailsStyles.img}
          src={item.image}
          alt={item.image}
        ></img>
      </li>
      <li className="mt-4 mb-8">
        <h3 className={`${detailsStyles.name} text text_type_main-medium `}>
          {item.name}
        </h3>
      </li>
      <ul className={`${detailsStyles.cell} mb-15`}>
        <li className="mr-5">
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p
            className={`${detailsStyles.number} text text_type_digits-default text_color_inactive`}
          >
            {item.calories}
          </p>
        </li>
        <li className="mr-5">
          <p className="text text_type_main-default text_color_inactive">
            Белки,г
          </p>
          <p
            className={`${detailsStyles.number} text text_type_digits-default text_color_inactive`}
          >
            {item.proteins}
          </p>
        </li>
        <li className="mr-5">
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p
            className={`${detailsStyles.number} text text_type_digits-default text_color_inactive`}
          >
            {item.fat}
          </p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p
            className={`${detailsStyles.number} text text_type_digits-default text_color_inactive`}
          >
            {item.carbohydrates}
          </p>
          <p></p>
        </li>
      </ul>
    </ul>
  );
};

ModalDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ModalDetails;
