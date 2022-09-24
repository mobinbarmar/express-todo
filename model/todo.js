const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

const filePath = path.join(rootDir, 'data', 'todos.json')

class Todo {
    constructor(id, title, completed = false) {
        this.id = id,
        this.title = title,
        this.completed = completed
    }

    save(callback){
        fs.readFile(filePath, (err, fileContent) => {
            // if(err) return []
            const todos = JSON.parse(fileContent)
            todos.push(this)

            fs.writeFile(filePath, JSON.stringify(todos), (err) => {
                if(!err) callback(err)
                else return callback([])
            })
        })

    }

    static fetchAll(callback){
        fs.readFile(filePath, (err, fileContent) => {
            if(err) return []
            const todos = JSON.parse(fileContent)
            callback(todos)
        })
    }

    static deleteTodo(id, callback){
        fs.readFile(filePath, (err, fileContent) => {
            const todo = JSON.stringify(fileContent)
            const filteredTodos = todo.filter(t => t.id != id)
            fs.writeFile(filePath, JSON.stringify(filteredTodos), (err) => {
                callback(err)
            })
        })
    }

    static setTodoToCompelete(id, callback){
        fs.readFile(filePath, (err, filecontent) => {
            const todos = JSON.parse(filecontent)
            const todoIndex = todos.findIndex(t => t.id == id)
            const todo = todos[todoIndex]
            todo.completed = true
            todos[todoIndex] = todo
            fs.writeFile(filePath, JSON.stringify(todos), (err) => {
                callback(err)
            })
        })

    }
}

module.exports = Todo