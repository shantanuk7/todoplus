'use client'

import TaskList from "./TaskList";
import SortedList from "./SortedList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
  
interface TaskItem {
    id: string;
    text: string;
    imp: boolean;
    urg: boolean;
  }

export default function WorkArea(){

    //Main Parent level tasks list array storing state of all tasks.
    const [taskList, setTaskList] = useState<TaskItem[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTasks = localStorage.getItem("tasks");
            if (savedTasks) {
                setTaskList(JSON.parse(savedTasks));
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }, [taskList]);

    //handleSubmit is called by <TaskList/> when it is called by form onSubmit in TaskList component.
    const handleSubmit = (task:any)=>{

        if(task !== ""){
            setTaskList([
                ...taskList,
                {
                    id: uuidv4(),
                    text: task.trim(),
                    imp:null as any,
                    urg:null as any,
                }
            ]);
        }
    }

    //handleEdit called by TaskList
    const handleEdit = (id: string, newText: string) => {
        const newTaskListState = taskList.map(taskitem => {
            if(taskitem.id === id){
                return {...taskitem, text: newText}
            }
            return taskitem;
        });

        setTaskList(newTaskListState);
    }

    //handleDelete is called by <TaskList/> when it is called by form onSubmit in TaskList component.
    const handleDelete = (id: string)=>{
        const updatedList = taskList.filter((taskitem: any) => {
            return taskitem.id !== id;
        });

        setTaskList(updatedList);
    }

    const handlePriorityChange = (id: string, urg: boolean, imp: boolean)=>{
        console.log(id + "Task priority is getting changed");
        const newTaskListState = taskList.map(taskitem => {
            if(taskitem.id == id){
                return {...taskitem, imp:imp, urg:urg}
            }
            return taskitem;
        })
        
        setTaskList(newTaskListState);
        console.log("Changed state of a task item and new tasklist is ", newTaskListState);
    }

    return (
        <div className="flex flex-1">
            <TaskList taskList={taskList} handleSubmit={handleSubmit} handleDelete={handleDelete} handleEdit={handleEdit} handleChange={handlePriorityChange}/>
            <SortedList taskList={taskList} handlePriorityChange={handlePriorityChange}/>
        </div>
    )
}