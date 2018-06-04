import 'isomorphic-fetch';
import React, { Component } from 'react';
import Button from '../../components/Button';

import { firstEndpointRoute } from '../../../shared/routes';

class Home extends Component {
  constructor(props) {
    // we can use this.props in constructor by using super
    super(props);
    // we define the initial state here
    this.state = {
      buttonText: 'Good Morning',
      buttonTextAsync: 'Good Morning Server',
    };
    // we bind 'this' to use 'this' in the clickhandler function (and we do to set the new state)
    this.clickHandler = this.clickHandler.bind(this);
    this.clickHandlerAsync = this.clickHandlerAsync.bind(this);
  }

  clickHandler() {
    // eslint-disable-next-line no-console
    console.log('Button clicked');
    // get the current time
    const time = new Date();
    // set the state
    this.setState({
      buttonText: `Good Morning again at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    });
  }

  clickHandlerAsync() {
    // eslint-disable-next-line no-console
    console.log('Async Button clicked');

    // we pipe the promise
    return (
      fetch(firstEndpointRoute(123), {
        method: 'GET',
      })
        // when a response came back, give a json to the next step
        .then((res) => {
          if (!res.ok) throw Error(res.statusText);
          return res.json();
        })
        // check if this json (now js object) has a parameter serverMessage
        .then((data) => {
          if (!data.serverMessage) {
            throw Error('No message received');
          }
          // and set the state with that message
          this.setState({
            buttonTextAsync: data.serverMessage,
          });
        })
    );
  }

  render() {
    // The render() function of React Components always has to return a single Component,
    // so we wrap the content into a div. In React 16 this is not necessary but we keep it
    // compatible to React15
    return (
      <div>
        <h1>Home</h1>
        <Button text={this.state.buttonText} onButtonClick={this.clickHandler} />
        <Button text={this.state.buttonTextAsync} onButtonClick={this.clickHandlerAsync} />
      </div>
    );
  }
}

export default Home;
