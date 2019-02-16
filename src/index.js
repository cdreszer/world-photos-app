import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer); // , initialState); //applyMiddleware(thunk));

// Add redux store
ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
