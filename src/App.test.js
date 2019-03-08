import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(rootReducer);
  global.scrollTo = jest.fn();

  ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
