/**
 * Created by gabrielkunkel on 11/8/16 in JavaScript.
 */
'use strict';

import sen from 'seneca'
const seneca = sen()

seneca.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
  respond(null, { answer: msg.left + msg.right})
})


seneca.act({role: 'math', cmd: 'sum', left: parseInt(process.argv[2]), right: parseInt(process.argv[3])}, function(err, res) {
  if (err) console.error(err)
  console.log(res);
})

module.exports = seneca
