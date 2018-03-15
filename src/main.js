import React, { Component } from 'react';
import reactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('%chi %o', 'color:teal', this.props);

    return <div>hi</div>;
  }
}

reactDOM.render(<App />, document.getElementById('app-root'))
