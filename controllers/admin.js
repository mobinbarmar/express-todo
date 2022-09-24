const Todo = require('../model/todo');

exports.addTodo = (req, res) => {
    if(!req.body.todo) return res.redirect('/')
    const todo = new Todo(Math.floor(Math.random() * 1000), req.body.todo)

    todo.save((err) => {
        if(!err) res.redirect('/')
        else console.log(err);
    })
}

exports.deleteTodo = (req, res) => {
    Todo.deleteTodo(req.params.id, (err) => {
        if(!err) res.redirect('/')
        else console.log(err);
    })
}

exports.compeleteTodo = (req, res) => {
    Todo.setTodoToCompelete(req.params.id, (err) => {
        if(!err) res.redirect('/')
        else console.log(err);
    })
}