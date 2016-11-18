'use strict';

let seneca = require('seneca')();
import math from './05_extend';

let left = Number(process.argv[2])
let right = Number(process.argv[3])

seneca.use(math)
  .act({ role: 'math', cmd: 'sum', left: left, right: right}, (err, res) => {
    console.log(res);
  })
  .act({ role: 'math', cmd: 'sum',  integer: true, left: left, right: right}, (err, res) => {
    console.log(res);
  })
