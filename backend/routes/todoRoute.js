const express = require('express');
const todoRoute = express.Router();
const todoSchema = require('../model/todoModel');

todoRoute.route('/todolist').get((req, res) => {
  todoSchema.find({}, (err, todos) => {
    res.json(todos);
    console.log(todos);
  })
});

todoRoute.post("/todolist/:id/post", (req, res) => {

});

todoRoute.post("/todolist/:id/delete", (req, res) => {

});

module.exports = todoRoute;