// eslint-disable-next-line import/prefer-default-export
export const tutorialsPage = num => ({
  serverMessage: `Hello from the server! (received ${num})`,
});

// Here is our controller. It would typically make business logic and database calls
// but in our case we just hard-code some results. Those results are passed back to
// the routing module to be used to initialize our application state.
