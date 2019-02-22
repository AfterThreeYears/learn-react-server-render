import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import styles from './index.css';
import withCssComponent from '../../components/withCssComponent';

class Header extends PureComponent {
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
