import express from 'express';
import axios from 'axios';
import { matchRoutes } from "react-router-config";
import { render } from './utils';
import routers from '../Routers';
import getStore from '../store';

const app = express();

app.use(express.static('public'));
app.get('/list', (req, res) => {
  console.log('**********', req.get('cookie'));
  res.end(JSON.stringify([1, 2, 3]));
});
app.get('*', (req, res) => {
  axios.defaults.headers.cookie = req.get('cookie');
  const store = getStore();
  const promises = matchRoutes(routers, req.url)
    .map(router => router.route.loadData)
    .filter(Boolean)
    .map((loadData) => loadData(store));
  // console.log('promises', matchRoutes(routers, req.url));
  console.log('@开始获取数据');
  console.time('fetch');
  Promise.all(promises).then(() => {
    console.log('@获取数据完成');
    console.timeEnd('fetch');
    res.end(render(store, routers, req));
  });
});

app.listen(3000);