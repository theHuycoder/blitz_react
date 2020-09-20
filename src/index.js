import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import mainReducers from "./reducers/mainReducers";
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    mainReducers,
    applyMiddleware(sagaMiddleware));
ReactDOM.render(
    <React.StrictMode>
       <Router>
           <Provider store={store}>
               <App/>
           </Provider>
       </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
