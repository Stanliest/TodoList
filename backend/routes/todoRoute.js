const express = require('express');
const todoRoute = express.Router();
const todoSchema = require('../model/todoModel');
const mongoose = require('mongoose');
const conn = mongoose.connection;

todoRoute.get("/todolist", (req, res) => {
  todoSchema.find({}, (err, todos) => {
    res.json(todos);
    console.log('fetch /todolist: ', todos);
  })
});

todoRoute.post("/todolist/post", (req, res) => {
  console.log('post req.body:', JSON.stringify(req.body));
  conn.collection('todoCollection').insertOne(req.body, function (err, result) {
    if (err) {
      res.send('Error');
    } else {
      res.send(req.body);
    }
  })
});

todoRoute.post("/todolist/:id/delete", (req, res) => {
  let id = req.params.id
  todoSchema.findByIdAndRemove(id, function (err, todo) {
    if (err) {
      console.log('Item not found')
    }
    res.json('Item deleted')
  })
});

module.exports = todoRoute;