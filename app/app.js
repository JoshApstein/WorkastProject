import 'babel-polyfill';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import reducer from './reducers/reducer';
import saga from './middleware/sagas';
/* global document:false */

// make sure middleware works with the store and reducer
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(saga);

// make sure the app has access to state
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
