const Todo = require('../model/todo');
const todoUtils = require('../utils/todos');
const { compeleteTodo } = require('./admin');

exports.getIndex = (req, res) => {
    todoUtils.getCompeletedTodos(compeletedTodos => {
        todoUtils.getRemainingTodos(remainingTodos => {
            Todo.fetchAll((todos) => {
                res.render('index', {
                    pageTitle: 'todos',
                    todos: todos,
                    compeletedTodos,
                    remainingTodos
                })
            })
        })
    })
}