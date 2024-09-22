import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.addTodoInput = this.addTodoInput.bind(this)
  }

  addTodoInput() {
    const todoInputValue = document.querySelector("input").value; //worked
    console.log(this.props.todoContext)
    this.props.todoContext.addTodo(todoInputValue) //doesn't work, cannot read addTodo()
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    addElement.querySelector("#todo-add-btn").addEventListener("click", this.addTodoInput)

    return addElement;
  }
}