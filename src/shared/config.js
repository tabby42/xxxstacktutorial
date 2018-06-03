// If the Node process used to run your app has a process.env.PORT environment variable set
// (that's the case when you deploy to Heroku for instance) it will use this for the port.
// If there is none, we default to 8000.
export const WEB_PORT = process.env.PORT || 8000;
export const STATIC_PATH = '/static';
export const APP_NAME = 'Huhu';
// The isProd is a simple util to test whether we are running in production mode or not.
// If the "NODE_ENV" is not set to "production" then the code defaults to "development".
export const isProd = process.env.NODE_ENV === 'production';
