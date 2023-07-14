import UrgImp from "./sorters/UrgImp";
import NotUrgImp from "./sorters/NotUrgImp";
import UrgNotImp from "./sorters/UrgNotImp";
import NotUrgNotImp from "./sorters/NotUrgNotImp";

export default function SortedList(){
    return (
        <div className="sortlist flex-1">
            <table className="h-full w-full border-solid border-2 border-light-color">
                <tbody>
                <tr className="h-14">
                    <td className="w-0.5"></td>
                    <th className="w-1/2 text-light-color p-2">Urgent</th>
                    <th className="w-1/2 text-light-color p-2">Not Urgent</th>
                </tr>
                <tr className="">
                    <th className="text-light-color w-0.5 rotate-text p-4">Important</th>
                    <td className="w-1/2 h-1/2"><UrgImp/></td>
                    <td className="w-1/2 h-1/2"><NotUrgNotImp/></td>
                </tr>
                <tr className="">
                    <th className="text-light-color w-0.5 rotate-text p-4">Not Important</th>
                    <td className="w-1/2 h-1/2"><NotUrgImp/></td>
                    <td className="w-1/2 h-1/2"><UrgNotImp/></td>
                </tr>
                </tbody>
            </table>
            
            
            
            
        </div>
    )
}