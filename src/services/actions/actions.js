const ADD_INGREDIENTS_ITEM = "ADD_INGREDIENTS_ITEM";
const CONSTRUCTOR_ITEM = "CONSTRUCTOR_ITEM";
const ADDMODAL_ITEM = "ADDMODAL_ITEM";
const DELETEMODAL_ITEM = "DELETE_ITEM";
const ORDER_NUMBER = "ORDER_NUMBER";

/* const getIngredient = () => {
  return function (dispatch) {
    fetch(`${baseUrl}/ingredients`)
      .then((response) => response.json())
      .then((json) => dispatch(ingredient(json)))
      .catch(error);
    console.error(error);
  };
}; */

function ingredient(payload) {
  return {
    type: ADD_INGREDIENTS_ITEM,
    payload,
  };
}

function constructor(payload) {
  return {
    type: CONSTRUCTOR_ITEM,
    payload,
  };
}

export {
  ingredient,
  constructor,
  ADD_INGREDIENTS_ITEM,
  CONSTRUCTOR_ITEM,
  ADDMODAL_ITEM,
  DELETEMODAL_ITEM,
  ORDER_NUMBER,
};
