const Todo = require('../model/todo');

exports.getIndex = (req, res) => {
    Todo.fetchAll((todos) => {
        res.render('index', {
            pageTitle: 'todos',
            todos: todos,
        })
    })
}