import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleSubmit(event){
        event.preventDefault();
       
        setTodos([...todos, newTodo]);
        setNewTodo('')

    }

    function handleDelete(index) {
        
        setTodos(todos.filter((_, i) => i !== index))
        
    }
   



  return (
    <div className='toDos'>
        <form onSubmit={handleSubmit} className='todo-add'>
            <input placeholder="I need to..."value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button className='add-button'type='submit'>+</button>
            
        </form>
        <ul className='todoList'>
                {todos.map((todos, i) => (

                    <div className='todo-item' key={i}>
                        <button className='deleteButton' onClick={() => handleDelete(i)}><b>x</b></button>
                        <div className='todo-text'><b>{i +1}.</b> {todos} </div> 
                        
                    </div>
                ))}
            </ul>
    </div>
  )
}

export default TodoList