import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState ,
  reducers: {
    addTodo(state, {payload}) {      
      state.todos = [...state.todos, payload]      
    },
    removeTodo(state, {payload}) {
      state.todos = state.todos.filter(todo => todo.id !== payload)            
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer