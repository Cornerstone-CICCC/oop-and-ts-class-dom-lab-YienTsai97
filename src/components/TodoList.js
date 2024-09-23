import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.updateList = this.updateList.bind(this)
    this.props.todoContext.subscribe(this.updateList)
  }

  updateList(todos) {
    this.state.todos = todos
    this.ul.innerHTML = ``

    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo: todo,
        todoContext: this.props.todoContext
      }).render()
      this.ul.appendChild(todoItem)
    })

  }

  render() {
    const todoList = document.createElement('div')
    todoList.className = "todo-list"
    todoList.innerHTML = `<ul></ul>`

    this.ul = todoList.querySelector('ul')
    return todoList
  }
}