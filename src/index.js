// @flow

'use strict';

import thunkMiddleware from 'redux-thunk';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import { Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from './store/reducers';

import App from './components/App';

// var VideoModeConfigurationClass = require("@brightsign/videomodeconfiguration");
// var videoConfig = new VideoModeConfigurationClass();

// videoConfig.getBestMode("hdmi").then(
//   function(data) {
//     console.log("getBestMode returned");
//     console.log(data);
//     act = document.getElementById('action')
//     act.style.color = "red"
//   })
// .catch(
//   function(data) {
//     console.log(JSON.stringify(data));
//   });

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.getElementById('content'));