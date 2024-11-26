import { useState,useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './App.css';

const App=()=>{
  const [tasksList,setTasksList]=useState([]);
 

  useEffect(()=>{
    const tasks=JSON.parse(localStorage.getItem("task"));
    setTasksList(tasks)
      
   },[]);

   useEffect(()=>{
       localStorage.setItem("task",JSON.stringify(tasksList))
   },[tasksList]);

   const deleteTask=(id)=>{
    const filteredTask=tasksList.filter(task=>task.id!==id);
    setTasksList(filteredTask)
   }

  const updateTask=(editedTask)=>{
    const updatedList=tasksList.map(task=>task.id===editedTask.id?editedTask:task);
    setTasksList(updatedList)
  }

  const addTask=(newTask)=>{
      setTasksList([...tasksList,newTask])
  }

  

  return(
  <div className="container h-screen w-screen mx-auto  bg-amber-100 flex flex-col justify-center items-center">
    <h1 className="md:text-4xl text-xl font-sans font-bold text-center mb-3 pt-2xl h-12 shadow bg-orange-100">Task Managing Application</h1>
    <div className="md:h-3/6 h-2/6  md:w-5/6 bg-lime-50 flex flex-col md:px-8 px-4 py-3 md:py-4">
      <h2 className="md:text-3xl text-xl font-bold text-center md:mt-3 mt-2">Add New Task</h2>
      <TaskForm addTask={addTask}/>
    </div>
    <div className=" h-3/6 w-11/12 bg-cyan-100 flex flex-col px-8 py-4 mt-2">
      <h2 className="md:text-3xl text-xl font-bold text-center " >Tasks List</h2>
      <TaskList tasksList={tasksList} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  </div>
  )
}

export default App;
