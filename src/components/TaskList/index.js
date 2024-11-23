import { useState} from "react";
import EmptyListView from "../EmptyListView";


const TaskList=(props)=>{
    const {tasksList,updateTask,deleteTask}=props
    const [editTaskId,setEditTaskId]=useState(null);
    const [editedTask,setEditedTask]=useState({})
   
    
   

    const handleEditStart=(task)=>{
        setEditTaskId(task.id);
        setEditedTask({...task})
    }

    const handleEditChange=(key,value)=>{
      setEditedTask({...editedTask,[key]:value})
    }
   
    const handleEditSave=()=>{
      updateTask(editedTask) 
      setEditTaskId(null)
    }

    const handleDeleteTask=(id)=>{
      deleteTask(id)
    }

    return(
       <div className="overflow-auto">
           {tasksList.length>0?
            <div>
                <ul className="flex flex-row justify-start items-center flex-wrap">
                    {tasksList.map((task=>(
                         <li key={task.id} 
                         className="flex flex-col justify-around items-start w-[600px] h-[300px] px-2 list-none bg-lime-300 rounded m-1"
                         >
                        {editTaskId===task.id?
                            <>
                            <label className="font-serif font-bold text-1xl mr-10" id="title">Title</label>
                            <input
                            type="text" 
                            className="font-serif font-bold text-1xl bg-white shadow-sm border-spacing-2"
                            value={editedTask.title} 
                            onChange={(e)=>handleEditChange("title",e.target.value)}
                            
                            htmlFor="title"
                            />

                            <label className="font-serif font-bold text-1xl mr-10" id="description">Description</label>
                            <textarea
                            type="text"
                           
                            className="font-serif h-5 w-24 font-bold text-1xl bg-white shadow-sm border-spacing-2"
                            value={editedTask.description}
                            onChange={(e)=>handleEditChange("description",e.target.value)}
                            htmlFor="description"
                            ></textarea>

                            <label className="font-serif font-bold text-1xl mr-10" id="dueDate">Due Date</label>
                            <input
                            type="date"
                            value={editedTask.dueDate}
                            className="font-serif font-bold text-1xl bg-white shadow-sm border-spacing-2"
                            onChange={(e)=>handleEditChange("dueDate",e.target.value)}
                            htmlFor="dueDate"
                            />

                            <label className="font-serif font-bold text-1xl mr-10" id="status">Status</label>
                            <select htmlFor="status" 
                            value={editedTask.status} 
                            className="font-serif font-bold text-1xl bg-white shadow-sm border-spacing-2"
                            onChange={(e)=>handleEditChange("status",e.target.value)}
                            >
                                <option value="Pending">Pending</option>
                                <option value="In-Progress">In-Progess</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <button className="h-11 w-32 bg-blue-300 rounded" type="button" onClick={handleEditSave}>Save</button>
                            </>:
                           
                            (<><h1 className="text-1xl font-serif font-bold m-1">Title : {task.title}</h1>
                            <p  className="text-1xl font-serif font-bold m-1">Description : {task.description}</p>
                            <p  className="text-1xl font-serif font-bold m-1">DueDate : {task.dueDate}</p>
                            <p  className="text-1xl font-serif font-bold m-1">Task Status : {task.status}</p>
                            <div className="flex flex-row justify-center items-center "> <button className="h-11 w-16 m-2 bg-blue-400 rounded" type="button" onClick={()=>handleEditStart(task)}>Edit</button>
                            <button  className="h-11 w-16 m-2 bg-blue-400 rounded" type="button" onClick={()=>handleDeleteTask(task.id)}>Delete</button>
                            </div>
                            </>)
                        }
                        </li>
                        
                    )))}
                </ul>
            </div>
           :<EmptyListView/>}
       </div>
    )  
}

export default TaskList