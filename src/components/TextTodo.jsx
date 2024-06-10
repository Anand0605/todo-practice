import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TextTodo = ({todoList, setTodoList}) => {
const [inputBox, setInputBox]= useState('')
console.log(inputBox)

    // function getData(val){
    //     console.log(val.target.value)
    //     setInputBox(val.target.value)
    // }

    const addItem =()=>{
        const newTodoItem ={
            id: uuidv4(),
            item: inputBox,
            done: false
        }
        inputBox("")

    }
  return (
    <>
    {/* <h1>{inputBox}</h1> */}
    <div className="input">
        <input type="text"
        value={inputBox}
         placeholder='input todo....'
        //  onChange={getData}
        onChange={(e)=>{setInputBox(e.target.value)}}
         />
        <button  onClick={addItem} className='btn'>Add</button>
    </div>
    </>
  )
}

export default TextTodo