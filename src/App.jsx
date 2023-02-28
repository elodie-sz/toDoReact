import { useState } from 'react'
import './App.css'

function App() {

const [todos, setTodos] = useState([]);

  return (
    <div className="app-list">
    
          <h1>Mes tâches</h1>

          <Form 
            addTodo={todo => {
            setTodos((prev) => [...prev, todo]);
          }
          }/>

      <div className='todo-list'>
          {todos.map((todo , index ) => (
            <Todo onDelete= {() => {
              setTodos(prev => {
                const copyTodos = prev.filter((_, y) => index !== y);
              })
            }}
            
            key={index}>
              
              {todo}
              </Todo>

          ))}
      </div>
          

    </div>
  )
}

export default App

const Form = ({addTodo}) => {

const onSubmit = (event) => {
  event.preventDefault()

  const todoText = event.currentTarget.elements.todo.value;
  addTodo(todoText);
  event.currentTarget.reset();
}

  return <form className='form-perso' onSubmit={onSubmit}>
      <input id="todo" className='input' type="text" placeholder='Ajouter une tâche' />
      <Button type="Submit">Ajouter</Button>
  </form>
}

const Button = ({children, ...props}) => {
  return <button className="button" {...props}>
    {children}
  </button>
}

const Todo = ({ children, onDelete}) => {
  return <div className='todo'>
    <CheckBox/>
    <span className='todo-text'>{children}</span>
    <button onClick={onDelete} className='todo-delete'>
      <svg
            xmins="http://www.w3.org/2000/svg"
            xminsXlink="htpp://www.w3.org/1999/xlink"
            width="1em"
            height="1em"
            viewBox="0 0 256 256">

              <path
                  fill='currentColor'
                  d='M216 48H40a12 12 0 0 0 0 24h4v136a20.1 20.1 0 0 0 0'
              ></path>
      </svg>
    </button>
  </div>
}

const CheckBox = () => {

  const [checked, setChecked] = useState(false);

  const onChange = (event) => {
    setChecked(event.target.checked)
  }

  return <div className='checkbox'>
    <input type="checkbox" checked={false} onChange={(onChange) => 
      {checked && (
        <svg 
            xmins="http://www.w3.org/2000/svg"
            xminsXlink="htpp://www.w3.org/1999/xlink"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"/>
      )}} />

  </div>
}
