import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';

import App from 'shared/app';
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT, isProd } from 'shared/config';

function renderApp(location, state, routerContext = {}) {
  // ReactDOMServer.renderToString is where the magic happens.
  // React will evaluate our entire shared App, and return a plain string of HTML elements.
  // Provider works the same as on the client, but on the server, we wrap our app
  // inside StaticRouter instead of BrowserRouter.
  const appHtml = ReactDOMServer.renderToString((
    <StaticRouter location={location} context={routerContext}>
      <App />
    </StaticRouter>));

  // React Helmet uses react-side-effect's rewind to pull out some data
  //  from the rendering of our app,
  // which will soon contain some <Helmet /> components. Those <Helmet /> components are where
  // we set the title and other head details for each page. Note that Helmet.rewind()
  //  must come after ReactDOMServer.renderToString().
  const head = Helmet.rewind();

  const stylesheet = isProd
    ? `<link rel="stylesheet" href="${STATIC_PATH}/css/styles.css">`
    : '';

  const script = isProd
    ? `<script src="${STATIC_PATH}/js/bundle.js"></script>`
    : `<script src="http://localhost:${WDS_PORT}/dist/js/bundle.js"></script>`;

  return `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        ${stylesheet}
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        ${script}
      </body>
    </html>`;
}

export default renderApp;
