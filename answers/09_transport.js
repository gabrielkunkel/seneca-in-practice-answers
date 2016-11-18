import math from './08_pin'

const port = process.argv[2]
require('seneca')().use('./08_pin').listen({port: port});
