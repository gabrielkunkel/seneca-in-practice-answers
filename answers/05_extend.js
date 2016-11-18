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

  return 'operations'

};
