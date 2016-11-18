/**
 * Created by gabrielkunkel on 11/8/16 in JavaScript.
 */

import sen from 'seneca'
const seneca = sen()

seneca.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
  respond(null, { answer: msg.left + msg.right})
})

module.exports = seneca