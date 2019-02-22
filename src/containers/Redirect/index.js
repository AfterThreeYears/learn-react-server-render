import React from 'react';
import { Redirect } from 'react-router-dom';

export default function MyRedirect(props) {
  if (props.staticContext) {
    props.staticContext.status = 301;
  }
  return <Redirect to="/" form="/redirect" />
}
