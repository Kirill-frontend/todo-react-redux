import React from 'react'

function Todo({ todo, handlers, nodeRef }) {
  return (
      <li className="todo" ref={nodeRef}>
        <div className="todo-desc"><p>{todo.desc}</p></div>
        <div className="todo-delete" onClick={() => handlers.remTodo(todo.id)}><i className="large material-icons">backspace</i></div>
      </li>    
  )
}

export default Todo