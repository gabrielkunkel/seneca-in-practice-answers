module.exports = function math (options) {

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

      this.prior(msg, (err, res) => {
        res.info = msg.left + ' + ' + msg.right;
        respond(null, res)
      })

    } // end if
    else {
      return respond(new Error('Expected left and right to be numbers.'));
    }
  })

  this.wrap({role: 'math'}, function (msg, respond) {
    msg.left = Number(msg.left)
    msg.right = Number(msg.right)
    this.prior(msg, respond)
  })

  return 'math'
}
