import { useRef } from "react";

export default function Textarea({}) {
  return (
    <table className="border-collapse table-auto my-table">
        <tbody className="border border-green-600 ">
            <tr >
                <td className="px-4 py-4 border border-blue-600">Intro to CSS</td>
            </tr>
            <tr className="bg-emerald-200 hover:bg-gray-700">
                <td className="px-4 py-4 border border-blue-600">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
            </tr>
            <tr className="hover:bg-gray-700">
                <td className="px-4 py-4 border border-blue-600">Intro to JavaScript</td>
            </tr>
        </tbody>
    </table>
  );
}
