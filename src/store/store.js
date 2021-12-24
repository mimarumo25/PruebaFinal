import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { carritoReducer } from "../reducer/carritoReducer";
import { loginReducer } from "../reducer/loginReducer";
import { productReducers } from "../reducer/productReducers";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,  
  product:productReducers,
  carrito:carritoReducer,
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store