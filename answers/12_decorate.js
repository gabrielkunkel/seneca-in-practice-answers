module.exports = function math (options) {

  this.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
    let operation = this.make$('operation')
    operation.cmd = 'sum'
    operation.left = msg.left
    operation.right = msg.right
    operation.save$(function(err, operation) {
      if(err) return respond(err);
      return respond(null, {answer: msg.left + msg.right})
    })
  })

  this.add({ role: 'math', cmd: 'sum', integer: true}, (msg, respond) => {
    respond(null, {answer: Math.floor(msg.left + msg.right, 10)})
  })

  this.add({role: 'math', cmd: 'product'}, (msg, respond) => {
    let operation = this.make$('operation')
    operation.cmd = 'product'
    operation.right = msg.right
    operation.left = msg.left
    operation.save$(function(err, operation) {
      if (err) return respond(err);
      return respond(null, {answer: msg.left * msg.right})
    })
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

  this.add({role: 'math', cmd: 'operation-history'}, function product (msg, respond) {
  var operation = this.make$('operation')
  operation.list$({}, function (err, list) {
    if (err) {
      return respond(err)
    }
    return respond(null, {answer: list})
  })
})

this.decorate('availableOperations', (pattern) => {
  return ['sum', 'product', 'operation-history']
})

  return 'math'
}
