import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import styles from './index.css';
// import { isServer } from '../../utils/env';
import withCssComponent from '../../components/withCssComponent';

class Header extends PureComponent {
  // constructor() {
  //   super(...arguments);
  //   if (isServer) {
  //     this.props.staticContext.css.push(styles._getCss());
  //   }
  // }
  render() {
    return (
      <div className={styles.test}>
        Header
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/redirect">redirect</Link>
        <Link to="/404">404</Link>
      </div>
    )
  }
}

export default withCssComponent(styles)(Header);
