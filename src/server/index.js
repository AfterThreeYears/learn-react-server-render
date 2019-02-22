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
  const context = {};
  const promises = matchRoutes(routers, req.url)
    .map(router => router.route.loadData)
    .filter(Boolean)
    .map((loadData) => new Promise(resolve => {
      loadData(store).then(resolve).catch(resolve);
    }));
  console.time('fetch');
  Promise.all(promises).then(() => {
    console.timeEnd('fetch');
    const html = render(store, routers, context, req);
    console.log('context', context);
    if (context.action === 'REPLACE') {
      res.writeHead(context.status, {
        Location: context.url
      })
      res.end();
    } else if (context.notFound) {
      res.writeHead(404);
      res.end(html);
    } else {
      res.end(html);
    }
  }).catch(() => {
    res.writeHead(500, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end('一般不会跪');
  })
});

app.listen(3000);