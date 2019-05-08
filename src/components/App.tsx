import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

class App extends React.Component<any, object> {

  componentDidMount() {
    console.log("app.js::componentDidMount invoked");
  }

  render() {
    console.log("app.js::render invoked");

    return (
      <div>
        <p className="autorunText">Pizza</p>
        <p className="autorunText">Line 2: make it long enough so that it is visible on an overscan display such as the one in my office</p>
        <p className="autorunText">Line 3: make it long enough so that it is visible on an overscan display such as the one in my office</p>
        <p className="autorunText">Line 4: make it long enough so that it is visible on an overscan display such as the one in my office</p>
        <p className="autorunText">Line 5: make it long enough so that it is visible on an overscan display such as the one in my office</p>
        <p className="autorunText">Line 6: make it long enough so that it is visible on an overscan display such as the one in my office</p>
        <p className="autorunText">Line 7: make it long enough so that it is visible on an overscan display such as the one in my office</p>
      </div>
    );
  }
}

function mapStateToProps(state : any) {
  return {
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
