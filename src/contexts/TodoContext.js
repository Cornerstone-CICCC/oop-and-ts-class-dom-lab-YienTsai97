export class TodoContext {
    constructor() {

        this.todos = []
        this.listeners = []
    }

    addTodo(todo) {
        this.todos.push(todo)
        this.notifyListeners()
    }

    getTodos() {
        return this.todos
    }

    markTodo() {
        const todoElement = event.target.closest('li');
        todoElement.classList.toggle('completed')
    }

    deleteTodo() {
        const todoElement = event.target.closest('li').querySelector('span').innerText;
        this.todos = this.todos.filter(todo => todo != todoElement)
        this.notifyListeners()
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.todos))
    }
}

