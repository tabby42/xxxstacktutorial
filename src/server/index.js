import compression from 'compression';
import express from 'express';

import { APP_NAME, STATIC_PATH, WEB_PORT, isProd } from '../shared/config';
import renderApp from './render-app';

import { firstEndpointRoute } from '../shared/routes';

const app = express();

app.use(compression());
// We're using 2 different static file directories here.
// dist for generated files and public for declarative ones.
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME));
});

app.get(firstEndpointRoute(), (req, res) => {
  res.json({ serverMessage: `Hello from the server! (received ${req.params.num})` });
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${
    isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal'
  }.`);
});
