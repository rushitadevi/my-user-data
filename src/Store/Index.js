import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dashboardReducer from "../Reducers/dashboard.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    users:{}
  };
  
  const combReducer = combineReducers({
    users: dashboardReducer
  });
  
  export default function configureStore() {
    return createStore(
      combReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }