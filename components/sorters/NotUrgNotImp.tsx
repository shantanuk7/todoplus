"use client"
export default function NotUrgNotImp(props: any) {

  //handle Drag and drop

  function handleOnDrag(e: React.DragEvent, taskId: string) {
    e.dataTransfer.setData("taskId", taskId);
    console.log("Started drag on event: ");
    console.log(taskId);
    console.log(e);
  }

  function handleOnDrop(e: React.DragEvent) {
    console.log("Droping: ");
    console.log(e);

    const taskId = e.dataTransfer.getData("taskId") as string;
    console.log("taskId", taskId);
    // setTasks([...tasks, taskId]);

    //taskId is passed from this component to SortedList props
    //then it is passed from SortedList to WorkArea where actually updation is done
    //in handlePriorityChange(id: string)
    props.handleChange(taskId, false, false);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    console.log("Drag over", e);
  }

  return (
    <div
      className="border-2 border-white-color w-full h-full text-white"
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      {props.taskList
        ?.filter((item: any) => item.urg == false && item.imp == false)
        .map((taskitem: any) => {
          return (
            <li
              key={taskitem.id}
              draggable
              onDragStart={(e: any) => handleOnDrag(e, taskitem.id)}
              className="cursor-grab"
            >
              {taskitem.text}
            </li>
          );
        })}
    </div>
  );
}
