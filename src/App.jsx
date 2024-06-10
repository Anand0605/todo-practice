import React from 'react'
import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import List from './components/List/List';



const App = () => {
const [text, setText] = useState('')
const [todolist, setTodolist] = useState([]);
// console.log(text)
const addItem =()=>{
  if(!text){
    return alert("please add todo")
  }
  const newTodoItem = {
    id: uuidv4(),
    item: text,
    done: false
  }
  setTodolist([newTodoItem,...todolist])
  setText('')
}
// console.log(todolist)

const handleToggle =(itemId)=>{
 const newTodolist = todolist.map((listItem)=>{
  if(listItem.id === itemId){
    return {...listItem, done: !listItem.done};
  }
  return listItem
})
setTodolist(newTodolist)
}
// console.log(todolist)

const handleDelete = (itemId)=>{
 const newTodolist = todolist.filter((listItem)=>listItem.id !== itemId)
setTodolist(newTodolist)
}

  return (
    <>
    <div className="header">
      <h1>TODO list</h1>
    </div>
    <div className="input">
      <input type="text"
       placeholder='input todo.....'
        value={text} 
        onChange={(e)=>{setText(e.target.value)}}
        />
      <button className="btn" onClick={addItem}>+</button>
    </div>
    <List todolist={todolist} handleToggle={handleToggle} handleDelete={handleDelete}/>
    </>
  )
}

export default App