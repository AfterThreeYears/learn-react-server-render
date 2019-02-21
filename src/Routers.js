import Home from './containers/Home';
import Login from './containers/Login';
import App from './App';

export default [{
  component: App,
  path: '/',
  key: 'App',
  routes: [{
    component: Home,
    path: '/',
    exact: true,
    loadData: Home.loadData,
    key: 'home',
  }, {
    component: Login,
    path: '/login',
    exact: true,
    key: 'login',
  }],
}];
