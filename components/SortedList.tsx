import UrgImp from "./sorters/UrgImp";
import NotUrgImp from "./sorters/NotUrgImp";
import UrgNotImp from "./sorters/UrgNotImp";
import NotUrgNotImp from "./sorters/NotUrgNotImp";

export default function SortedList(){
    return (
        <div className="h-full w-4/6">
            <div className="flex w-full h-[5%]">
                <h2 className="flex-shrink-0 w-1/2 text-center bg-light-color" >Urgent</h2>
                <h2 className="w-1/2 text-center bg-light-color" >Not Urgent</h2>
            </div>
            <div className="flex flex-col h-full w-[5%] items-center justify-center">
                <div className="bg-light-color whitespace-nowrap text-s">
                    <h2 className="-rotate-90">Important</h2>
                </div>
                <div className="bg-light-color whitespace-nowrap text-s">
                    <h2 className="-rotate-90 h-1/2">Not Important</h2>
                </div>
            </div>

            <div className="h-[95%] w-[95%] grid grid-cols-2">
                <UrgImp/>
                <NotUrgNotImp/>
                <NotUrgImp/>
                <UrgNotImp/>
            </div>
        </div>
    )
}