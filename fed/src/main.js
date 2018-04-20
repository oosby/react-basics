import React from 'react';
import reactDOM from 'react-dom';
import App from './components/app';

reactDOM.render(<App />, document.getElementById('app-root'));

if (module.hot) {
  module.hot.accept('./components/app.js', function() {
    const NextApp = require('./components/app');
    reactDOM.render(<NextApp />, document.getElementById('app-root'));
  })
}
