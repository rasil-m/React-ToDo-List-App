import React,{useState,useEffect, useReducer} from 'react'
import './Send.css'
import axios from 'axios'
export default function Send() {

  const [item,setitem]=useState({task:""});

  const handleForm=(e)=>
   {
    e.preventDefault();

    axios.post("http://localhost:8081/add_task", {
      task:item.task
    })
    .then(function (response) {
      console.log(response);
      window.location.reload(false);
    })
    .catch(function (error) {
      console.log(error);
    });
  
   }

   


  return (
    <div className="Additem">
      <h1>ToDo App</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="task" value={item.task} onChange={(e)=>{setitem({task:e.target.value})}} placeholder="Add Item...."/>
        <button>Add Item</button>
      </form>
    </div>
  )
}
