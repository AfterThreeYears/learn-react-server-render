import React from 'react'
import { renderRoutes } from "react-router-config";
import Header from './components/Header';

export default function App(props) {
  return (<div>
    <Header staticContext={props.staticContext} />
    {renderRoutes(props.route.routes)}
  </div>);
}
