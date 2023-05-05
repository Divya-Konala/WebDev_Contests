import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCTS_TO_CART,
  REMOVE_PRODUCTS_FROM_CART,
  EMPTY_CART,
} from "./Actions";

const productsInitialState = {
  loading: true,
  data: [],
  error: "",
};

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
const cartInitialState = {
  data: JSON.parse(localStorage.getItem("cart_products"))||[]
};
const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_CART: {
      if (state.data.filter(item=>item.id==action.payload.id).length==0){
        localStorage.setItem("cart_products",JSON.stringify([...state.data,action.payload]));
        return {
            ...state,
            data: [...state.data, action.payload],
          }
      }
      else return state;
    }
    case REMOVE_PRODUCTS_FROM_CART:{
        localStorage.setItem("cart_products",JSON.stringify(state.data.filter((item) => item.id !== action.payload.id)));
        return {
            ...state,
            data: state.data.filter((item) => item.id !== action.payload.id),
          };
    }
    case EMPTY_CART:{
        localStorage.removeItem("cart_products");
        return {
            ...state,
            data: [],
          }
    }
     
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
