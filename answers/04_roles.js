let plugin = function(options) {

  this.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
    respond(null, {answer: msg.left + msg.right})
  })

  this.add({role: 'math', cmd: 'product'}, (msg, respond) => {
    respond(null, {answer: msg.left * msg.right})
  })

  return 'operations'
}

module.exports = plugin
