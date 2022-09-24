const todoUtils = require('../utils/todos');

class Todo {
    constructor(id, title, completed = false) {
        this.id = id,
        this.title = title,
        this.completed = completed
    }

    save(callback){
        todoUtils.getTodos((todos) => {
            todos.push(this)
            todoUtils.saveTodos(todos, (err) => {
                callbackK(err)
            })
        })

    }

    static fetchAll(callback){
        todoUtils.getTodos((todos) => {
            callback(todos)
        })
    }

    static deleteTodo(id, callback){
        todoUtils.getTodos((todos) => {
            todoUtils.saveTodos(todos.filter(t => t.id = id), (err) => {
                callback(err)
            })
        })
    }

    static setTodoToCompelete(id, callback){
        todoUtils.getTodos((todos) => {
            const todoIndex = todos.findIndex(t => t.id == id)
            const todo = todos[todoIndex]
            todo.completed = true
            todos[todoIndex] = todo
            todoUtils.saveTodos(todos, (err) => {
                callback(err)
            })
        })
    }
}

module.exports = Todo