import React, { useState } from "react";

export default function TaskList(props: any) {
    const [task, setTask] = useState('');
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

    function Task({taskitem}: any){
        const { id, text } = taskitem || {};

        const handleDoubleClick = () => {
            setEditingTaskId(id);
            setTask(text);
        };

        const handleEditCancel = () => {
            setEditingTaskId(null);
            setTask('');
        };

        const handleEditSave = () => {
            if (task !== "") {
                props.handleEdit(id, task);
            }
            setEditingTaskId(null);
            setTask('');
        };

        return (
            <div draggable onDragStart={(e: any) => handleOnDrag(e, id)} className="cursor-grab">
                {editingTaskId === id ? (
                    <>
                        <input
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            autoFocus
                        />
                        <button onClick={handleEditSave}>Save</button>
                        <button onClick={handleEditCancel}>Cancel</button>
                    </>
                ) : (
                    <>
                        <span onDoubleClick={handleDoubleClick}>{text}</span>
                        |<button onClick={() => props.handleDelete(id)}>X</button>|
                    </>
                )}
            </div>
        );
    }

    function handleOnDrop(e:React.DragEvent){
        console.log("Droping: ");
        console.log(e);
        
        const taskId = e.dataTransfer.getData("taskId") as string;
        console.log("taskId", taskId);
        
        //taskId is passed from this component to SortedList props
        //then it is passed from SortedList to WorkArea where actually updation is done
        //in handlePriorityChange(id: string)
        props.handleChange(taskId,null,null);
    }
    
    function handleDragOver(e:React.DragEvent){
        e.preventDefault();
        console.log("Drag over",e);
    }

    function handleOnDrag(e: React.DragEvent, taskId: string) {
        e.dataTransfer.setData("taskId", taskId);
        console.log("Started drag on event: ");
        console.log(e);
    }

    return (
        <div className="tasklist bg-white-color basis-[30vw] p-3" onDragOver={handleDragOver} onDrop={(e)=>handleOnDrop(e)}>
            <h3 className="text-center">Tasks</h3>

            <ul>
                {
                props?.taskList &&
                ((props.taskList).filter((item:any)=>((item.urg == null) && item.imp == null)).map((task: any) => {
                    return <Task taskitem={task} key={task.id}/>;
                }))}
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
