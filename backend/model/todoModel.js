const mongoose = require('mongoose')

const todo = new mongoose.Schema({
  name: String
},
  {
    collection: 'todoCollection'
  })

module.exports = mongoose.model('todo', todo);
