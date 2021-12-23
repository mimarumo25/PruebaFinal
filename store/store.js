import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { productReducers } from "../reducers/productReducers";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  product:productReducers,
  carrito:carritoReducer,
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store