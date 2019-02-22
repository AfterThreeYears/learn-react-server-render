import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';

export function render(store, routers, context, req) {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <div>
          {renderRoutes(routers)}
        </div>
      </StaticRouter>
    </Provider>
  );
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
            window.initState = {
              state: ${JSON.stringify(store.getState())}
            }
      </script>
      <script src="./index.js"></script>
    </body>
    </html>
  `
}

