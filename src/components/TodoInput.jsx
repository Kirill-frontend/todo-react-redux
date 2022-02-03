import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../slicers/todoSlice';

function TodoInput() {
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch()


  const addHandler = (e) => {
    e.preventDefault()
    setDesc('')
    dispatch(addTodo({ desc, id: Date.now().toString() }))
  }

  return (
    <form className="todoinput" onSubmit={addHandler}>
      <div className="input-field">
        <input placeholder="" id="first_name" type="text" className="validate" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <label htmlFor="first_name">Your task</label>
      </div>
      <div className="button-wrap">
        <button className="btn waves-effect waves-light" type="submit" >Submit
          <i className="material-icons right">send</i>
        </button>

      </div>
    </form>
  )
}

export default TodoInput