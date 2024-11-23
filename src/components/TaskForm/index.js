import { useState} from "react";


const TaskForm=(props)=>{
    const {addTask}=props;
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [dueDate,setDueDate]=useState("");
    const [status,setStatus]=useState("");
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTask={
            id:Date.now(),
            title,
            description,
            dueDate,status
        }

      addTask(newTask)
       setTitle("");
       setDescription("");
       setDueDate("");
       setStatus("Pendind");
    }

    return(
        <form className="w-[85%] h-[90%]" onSubmit={handleSubmit}>
            <div className="flex flex-row justify-start m-1" >
                 <label className="font-serif font-bold text-1xl mr-10" id="title">Title : </label>
                            <input 
                            className="font-serif font-bold text-1xl bg-white shadow-sm border-spacing-2"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            type="text"
                            htmlFor="title"
                            />
            </div>
            <div className="flex flex-row justify-start m-1">
            <label className="font-serif font-bold text-1xl mr-10" id="description">Description :</label>
                            <textarea
                            className="font-serif font-bold text-1xl bg-white shadow-sm border-spacing-2"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            htmlFor="description"
                            ></textarea>
            </div>
            <div className="flex flex-row justify-start m-1">
            <label className="font-serif font-bold text-1xl mr-10" id="dueDate">Due Date :</label>
                            <input
                            className="font-serif font-bold text-1xl bg-white shadow-sm border-spacing-2"
                            type="date"
                            value={dueDate}
                            onChange={(e)=>setDueDate(e.target.value)}
                            htmlFor="dueDate"
                            />
            </div>
            <div className="flex flex-row justify-start m-1">
            <label  className="font-serif font-bold text-1xl mr-10" id="status">Status : </label>
                            <select htmlFor="status" 
                            className="font-serif font-bold text-1xl bg-white shadow-sm border-spacing-2"
                           
                            value={status}
                            onChange={(e)=>setStatus(e.target.value)}
                            >
                                <option value="Pending">Pending</option>
                                <option value="In-Progress">In-Progess</option>
                                <option value="Completed">Completed</option>
                            </select>
                           
            </div>
            <button className="h-10 w-32 bg-blue-400 rounded cursor-pointer" type="submit" >Add</button>
        </form>
    )
}

export default TaskForm