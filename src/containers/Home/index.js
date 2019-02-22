import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchList, fetchTestList } from './store/action';
import styles from './index.css';
import { isServer } from '../../utils/env';

class Home extends PureComponent {
  constructor() {
    super(...arguments);
    if (isServer) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

  componentDidMount() {    
    if (this.props.list.length) return;
    this.props.fetchList();
    this.props.fetchTestList();
  }

  render() {
    return (<section>
      <h1 className={styles.test}>hello {this.props.name}</h1>
      <button onClick={() => alert(1)}>asdasd</button>
      {this.props.list.map(item => <span key={item}>{item}</span>)}
    </section>);
  }
}

Home.loadData = (store) => {
  // console.log('@@@', store.getState());
  return Promise.all([
    store.dispatch(fetchTestList()),
    store.dispatch(fetchList()),
  ]);
};

const mapStateToPorps = ({ home: { name, list } }) => ({ name, list });

const mapDispatchToProps = dispatch => ({
  fetchList() {
    dispatch(fetchList());
  },
  fetchTestList() {
    dispatch(fetchTestList());
  },
});

export default connect(mapStateToPorps, mapDispatchToProps)(Home);
