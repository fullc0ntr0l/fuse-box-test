import React from 'react';
// const React = require('react');
const ReactDOM = require('react-dom');

const AppContainer = require('react-hot-loader').AppContainer;

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <div>
        test page here
      </div>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render();
if (module.hot) {
  module.hot.accept('./App', render);
}
