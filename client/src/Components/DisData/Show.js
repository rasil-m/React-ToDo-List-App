import React,{useState,useEffect} from 'react'
import './Show.css';
import axios from 'axios';

export default function Show() {


  const [Data,setData]=useState([]);

  useEffect(()=>{

    axios.get("http://localhost:8081/view_task").then((res)=>{

    setData(res.data);

    });

  },[]);

  const taskComplete=(e)=>{

    const id=e.target.attributes.getNamedItem("data").value;

    axios.delete('http://localhost:8081/delete_task/'+id)
        .then((res)=>{
          window.location.reload(false);
        });


  }

  const items=Data.map((items,key)=>{

    return(
 
      <div className="tasks">
        <div>
          {items.tasks}
        </div>
        <button onClick={taskComplete} data={items.id}>Completed</button>

       </div> 

    )

  });

  return (
    
    <div>
      {items}
    </div>

  )
}
