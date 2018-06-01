/* eslint-disable no-console */

// const color = require('color');
// const redHexa = color({ r: 255, g: 0, b: 0 }).hex();
// console.log(redHexa);

// const str = 'ES6';
// console.log(`Hello ${str}`);

// const Sessel = require('./Sessel');
import Sessel from './Sessel';

const redChair = new Sessel('red');
console.log(redChair.info());


