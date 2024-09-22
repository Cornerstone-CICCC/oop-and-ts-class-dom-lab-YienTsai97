import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.markTodoItem = this.markTodoItem.bind(this)
    this.deleteTodoItem = this.deleteTodoItem.bind(this)

  }

  markTodoItem() {
    this.props.todoContext.markTodo(this.props.todo)
  }

  deleteTodoItem() {
    this.props.todoContext.deleteTodo(this.props.todo)
  }

  render() {
    const todo = document.createElement('li')
    todo.className = "todo-item"
    todo.innerHTML =
      `
    <span>${this.props.todo}</span>
    <div class="btns">
    <button class="btn-mark"></button>
    <button class="btn-delete">Delete</button>
    </div>
    `

    todo.querySelector(`btn-mark`).addEventListener("click", this.markTodoItem)
    todo.querySelector(`btn-delete`).addEventListener("click", this.deleteTodoItem)

    return todo;
  }
}