import compression from 'compression';
import express from 'express';

import { STATIC_PATH, WEB_PORT, isProd } from 'shared/config';
import routing from './routing';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

//  we call routing(app) instead of implementing routing in this file
routing(app);

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${
    isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal'
  }.`);
});
