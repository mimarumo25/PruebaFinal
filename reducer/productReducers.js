import { types } from "../types/types";

const initialState = {
  product: [],
  carrito: [],
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.list:
      return {
        product: [...action.payload],
      };
    default:
      return state;
  }
};
