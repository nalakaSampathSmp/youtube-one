
import { useState } from 'react';

import './App.css';

function App() {
  const [todoList,setTodoList]=useState([]); //todoList is variable , setTodoList is function
  const [newTask,setNewTask]=useState(""); //newTask is variable , setNewTask is function "" is default value
  
  const handleChange=(event)=>{
    setNewTask(event.target.value);
};
  const addTask=()=>{
 
    setTodoList([...todoList,newTask])// todoList+newTask (this is variable) තියෙන list එකේ අගට 
                                            //niwTask variable එකේ වvalue එක pass වෙනවා
  }

  const deleteTask=(taskName)=>{
    const newTodoList=todoList.filter((task)=>{
      if (task===taskName){
        return false;

      }else{
        return true
      } 

    });
    setTodoList(newTodoList);
  }


    return (

      <div className='App'>
        <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
        
        </div>
        <div className='list'>
          {
            todoList.map((task)=>{
              return <div>
                 <h1>{task}</h1>
                 <button onClick={()=>deleteTask(task)}>X</button>

                </div>
            })
          }
        </div>
        </div>      
    );
}
  

export default App;

