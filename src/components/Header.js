import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  render() {
    return (
      <div>
        Header
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
      </div>
    )
  }
}
