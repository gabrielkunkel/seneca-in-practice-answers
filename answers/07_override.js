'use strict';

module.exports = function(options) {

  this.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
    respond(null, {answer: msg.left + msg.right})
  })

  this.add({ role: 'math', cmd: 'sum', integer: true}, (msg, respond) => {
    respond(null, {answer: Math.floor(msg.left + msg.right, 10)})
  })

  this.add({role: 'math', cmd: 'product'}, (msg, respond) => {
    respond(null, {answer: msg.left * msg.right})
  })

  this.add({role: 'math', cmd: 'sum'}, function(msg, respond) {

    if (isFinite(msg.left) && isFinite(msg.right)) {

      this.prior(msg, (res, err) => {
        res.info = msg.left + ' + ' + msg.right;
        respond(null, res)
      })

    } // end if
    else {
      return respond(new Error('Expected left and right to be numbers.'));
    }
  })

  return 'operations'

};
