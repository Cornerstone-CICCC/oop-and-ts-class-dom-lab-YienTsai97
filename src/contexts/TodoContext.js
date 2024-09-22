export class TodoContext {
    constructor() {

        this.todos = []
        this.listeners = []
    }

    addTodo(todo) {
        this.todos.push(todo)
        console.log(`addTodo() activated //+${this.todo}`)
        this.notifyListeners()
    }

    getTodos() {
        return this.todos
    }

    markTodo() {
        this.parentElement.classList.toggle('completed')
        console.log("markTodo activated")
    }

    deleteTodo() {
        console.log("Del-Todo activated")
        this.todos.filter(todo => todo != todo)
        this.notifyListeners()

    }

    subscribe(listener) {
        this.listeners.push(listener)
        console.log("subscribe(listener) activated")
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.todos))
        console.log("notifyListeners() activated")
    }
}

