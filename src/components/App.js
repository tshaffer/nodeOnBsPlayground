// @flow

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  componentDidMount() {
    console.log("app.js::componentDidMount invoked");
  }

  render() {

    console.log("app.js::render invoked");

    return (
      <MuiThemeProvider>
        <div>
          <p className="autorunText">Pizza</p>
          <p className="autorunText">Line 2: make it long enough so that it is visible on an overscan display such as the one in my office</p>
          <p className="autorunText">Line 3: make it long enough so that it is visible on an overscan display such as the one in my office</p>
          <p className="autorunText">Line 4: make it long enough so that it is visible on an overscan display such as the one in my office</p>
          <p className="autorunText">Line 5: make it long enough so that it is visible on an overscan display such as the one in my office</p>
          <p className="autorunText">Line 6: make it long enough so that it is visible on an overscan display such as the one in my office</p>
          <p className="autorunText">Line 7: make it long enough so that it is visible on an overscan display such as the one in my office</p>
        </div>
      </MuiThemeProvider>
    );
  }
}
