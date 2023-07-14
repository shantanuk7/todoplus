import TaskList from "./TaskList";
import SortedList from "./SortedList";

export default function WorkArea(){
    return (
        <div className="h-[91%] flex">
            <TaskList/>
            <SortedList/>
        </div>
    )
}