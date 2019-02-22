import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchList, fetchTestList } from './store/action';
import withCssComponent from '../../components/withCssComponent';
import styles from './index.css';

class Home extends PureComponent {
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

const mapStateToPorps = ({ home: { name, list } }) => ({ name, list });

const mapDispatchToProps = dispatch => ({
  fetchList() {
    dispatch(fetchList());
  },
  fetchTestList() {
    dispatch(fetchTestList());
  },
});

const ExportHome = withCssComponent(styles)(connect(mapStateToPorps, mapDispatchToProps)(Home));

ExportHome.loadData = (store) => {
  // console.log('@@@', store.getState());
  return Promise.all([
    store.dispatch(fetchTestList()),
    store.dispatch(fetchList()),
  ]);
};

export default ExportHome;
