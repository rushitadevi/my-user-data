import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./StyleSheet/dashboard.css"
import "./StyleSheet/user.css"
import * as serviceWorker from './serviceWorker';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import configureStore from "./Store/Index.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
    <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
