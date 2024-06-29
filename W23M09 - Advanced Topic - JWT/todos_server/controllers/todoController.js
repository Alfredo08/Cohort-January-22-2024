const express = require('express');
const Todos = require('./../models/todoModel');
const validateToken = require('./../middlewares/validateToken');

const todoController = express.Router();

todoController.get('/todosByUser', validateToken, (req, res) => {
    const {id} = req.userInfo;
    Todos.getTodosByUser([id])
        .then((result) => {
            return res.status(200).json({todos: result.rows});
        });
});

module.exports = todoController;
