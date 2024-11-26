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
        <form className="md:w-[85%] md:h-[90%] flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-row justify-start m-1" >
                 <label className="font-serif font-bold md:text-1xl text-[12px] md:mr-10 mr-2" id="title">Title : </label>
                            <input 
                            className="font-serif font-bold md:text-1xltext-[12px] bg-white shadow-2xl md:border-spacing-2"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            type="text"
                            htmlFor="title"
                            required
                            />
            </div>
            <div className="flex flex-row justify-start m-1">
            <label className="font-serif font-bold md:text-1xl text-[12px] mr-10" id="description">Description :</label>
                            <textarea
                            className="font-serif font-bold md:w-[80%] md:text-1xl text-[12px] bg-white shadow-2xl border-spacing-2"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            htmlFor="description"
                            required
                            ></textarea>
            </div>
            <div className="flex flex-row justify-start m-1">
            <label className="font-serif font-bold md:text-1xl text-[12px] mr-10" id="dueDate">Due Date :</label>
                            <input
                            className="font-serif font-bold md:text-1xl text-[12px] bg-white shadow-2xl border-spacing-2"
                            type="date"
                            value={dueDate}
                            onChange={(e)=>setDueDate(e.target.value)}
                            htmlFor="dueDate"
                            required
                            />
            </div>
            <div className="flex flex-row justify-start m-1">
            <label  className="font-serif font-bold md:text-1xl text-[12px] mr-10" id="status">Status : </label>
                            <select htmlFor="status" 
                            className="font-serif font-bold md:text-1xl text-[12px] bg-white shadow-2xl border-spacing-2"
                           
                            value={status}
                            onChange={(e)=>setStatus(e.target.value)}
                            >
                                <option value="Pending">Pending</option>
                                <option value="In-Progress">In-Progess</option>
                                <option value="Completed">Completed</option>
                            </select>
                           
            </div>
            <button className="md:h-10 md:w-32 h-6 w-24 bg-blue-400 rounded cursor-pointer" type="submit" >Add</button>
        </form>
    )
}

export default TaskForm