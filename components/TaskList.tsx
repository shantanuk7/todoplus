import React, { useEffect, useState } from "react";

export default function TaskList(props: any) {
    const [task, setTask] = useState('');

    function Task({taskitem}: any){
        const { id, text } = taskitem || {};

        return (
            <div draggable onDragStart={(e: any) => handleOnDrag(e, id)}>
                {text}
                |<button onClick={()=>props.handleDelete(id)}>X</button>|
            </div>
        );
    }

    function handleOnDrag(e: React.DragEvent, taskId: string) {
    e.dataTransfer.setData("taskId", taskId);
        console.log("Started drag on event: ");
        console.log(e);
    }

    return (
        <div className="tasklist bg-white-color basis-[30vw] p-3">
            <h3 className="text-center">Tasks</h3>

            <ul>
                {(props.taskList).filter((item:any)=>((item.urg == null) && item.imp == null)).map((task: any) => {
                    return <Task taskitem={task} key={task.id} />;
                })}
            </ul>

            <form onSubmit={(e) => {e.preventDefault(); props.handleSubmit(task); setTask("");}} className="border-none">
                <input
                    type="text" value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="w-full bg-transparent p-1 border-none outline-none"
                    autoFocus
                />
            </form>

            <br />
        </div>
    );
}
