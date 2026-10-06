"use client";

import { useContext } from "react";
import { TodoContext } from "../page";

export default function TodoItem({ todo }) {
    const isCompleted = todo.status === "Completed";
    const { handleDeleteTodo, toggleStatus } = useContext(TodoContext);

    return (
        <tr className="hover:bg-gray-50 transition">
            <td className={`py-2.5 px-4 ${isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}>
                {todo.task}
            </td>
            <td className="py-2.5 px-4">
                <button
                    onClick={() => toggleStatus(todo.id)}
                    className={`px-2.5 py-0.5 text-xs font-semibold rounded-full cursor-pointer transition ${
                        isCompleted
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                    }`}
                >
                    {todo.status}
                </button>
            </td>
            <td className="py-2.5 px-4 text-center">
                <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold cursor-pointer transition"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
