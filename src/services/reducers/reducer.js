import {
  ADD_INGREDIENTS_ITEM,
  CONSTRUCTOR_ITEM,
  ADDMODAL_ITEM,
  DELETEMODAL_ITEM,
  ORDER_NUMBER,
} from "../actions/actions";

const initialState = {
  ingredients: [],
  order: null,
  orders: [],
  bun: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS_ITEM:
      return {
        ...state,
        //ingredients: [...state.ingredients, action.payload],
        ingredients: action.ingredients,
      };
    case CONSTRUCTOR_ITEM:
      return {
        ...state,
        bun: action.payload,
        ingredients: [...state.ingredients].map(
          (item) => item._id === action._id
        ),
      };
    default:
      return state;
  }
};
