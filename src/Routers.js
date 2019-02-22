import Home from './containers/Home';
import Login from './containers/Login';
import App from './App';
import NotFound from './containers/NotFound';
import Redirect from './containers/Redirect';

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
  }, {
    component: Redirect,
    path: '/redirect',
    exact: true,
    key: 'redirect',
  }, {
    component: NotFound,
  }],
}];
