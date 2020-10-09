import React from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import PropertiesHome from "./PropertiesHome";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const middleware = [thunk];

const reducers = {
  reducer,
};

const store = createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <PropertiesHome />
    </Provider>
  );
}

export default App;
