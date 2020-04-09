import React from 'react';

import './Todo.css'
import { todoData } from './data'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoData : todoData
    }
  }

  toggleTodo = todoId => {
    this.setState({
      todoData : this.state.todoData.map(item => {
        if(todoId === item.id) {
          return {
            ...item,
            completed : !item.completed
          }
        }
        return item
      })
    })
  }

  addItem = itemText => {
    const newItem = {
      task : itemText,
      id : Date.now(),
      completed : false
    }
    this.setState({
      todoData : [...this.state.todoData, newItem]
    })
    console.log(this.state)
  }

  clearCompleted = event => {
    event.preventDefault()
    this.setState({
      todoData : this.state.todoData.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Welcome to your Todo App!</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
          todoData={this.state.todoData} 
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
