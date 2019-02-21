import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import routers from '../Routers';
import getStore from '../store';
import { renderRoutes } from "react-router-config";

function App() {
  return (
    <Provider store={getStore()}>
      <Router>
        <div>
          {renderRoutes(routers)}
        </div>
      </Router>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.querySelector('#root'));
