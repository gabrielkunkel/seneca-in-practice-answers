

let plugin = function(options) {

  this.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
    respond(null, { answer: msg.left + msg.right})
  })

  return 'operations'
}

module.exports = plugin
