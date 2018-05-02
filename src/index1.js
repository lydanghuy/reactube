import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import SearchBar from './components/search_bar';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = 'AIzaSyDptlRyslOW_I54Ur8rBSnZxRJrNrfgtMc';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
