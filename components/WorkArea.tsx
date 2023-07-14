import TaskList from "./TaskList";
import SortedList from "./SortedList";

export default function WorkArea(){
    return (
        <div className="flex flex-1">
            <TaskList/>
            <SortedList/>
        </div>
    )
}