import thunkMiddleware from 'redux-thunk';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import { Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from './store/reducers';

import App from './components/app';

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
    ),
);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('content') as HTMLElement,
);
