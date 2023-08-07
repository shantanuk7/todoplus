'use client'

import { useState } from "react";

interface TaskItem {
    id: number;
    text: string;
  }
  

export default function CreateTask(){
    const [taskList, setTaskList] = useState<TaskItem[]>([]);
    const [task, setTask] = useState('');

    function handleSubmit(e:any){
        e.preventDefault();

        if(task !== ""){
            setTaskList([
                ...taskList,
                {
                    id: taskList.length + 1,
                    text: task.trim(),
                }
            ]);
        }
    }

    return(
        <form>
            <input 
                type="text" value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="submit">Add</button>
        </form>
        )
}