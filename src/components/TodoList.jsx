import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { removeTodo } from '../slicers/todoSlice'
import Todo from './Todo'

function TodoList() {
  const dispatch = useDispatch()      
  const nodeRef = React.createRef(null)
  const [todos, setTodos] = useState([])


  const todosState = useSelector(state => state.todo.todos)
  useEffect(() => setTodos(todosState), [todosState])


  const remTodo = (id) => {    
    dispatch(removeTodo(id))
  }  

  return (
    <ul className='todolist'>
      <TransitionGroup className="todolist">
        {todos.map((todo) => (
          <CSSTransition nodeRef={nodeRef} classNames='todoanim' timeout={200} key={todo.id}>
            <Todo nodeRef={nodeRef} todo={todo} handlers={{remTodo}} />
          </CSSTransition>
        )
        )}
      </TransitionGroup>
    </ul>
  )
}

export default TodoList