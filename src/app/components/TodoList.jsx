"use client";

import { useContext } from "react";
import { TodoContext } from "../page";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos } = useContext(TodoContext);

    return (
        <div className="w-full max-w-md mx-auto mt-6 overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
                <thead className="text-white bg-blue-500">
                    <tr>
                        <th className="py-2.5 px-4 font-semibold">Task</th>
                        <th className="py-2.5 px-4 font-semibold">Status</th>
                        <th className="py-2.5 px-4 font-semibold text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {todos.length === 0 ? (
                        <tr>
                            <td colSpan={3} className="py-6 text-center text-gray-400 text-sm">
                                No tasks found. Add one above!
                            </td>
                        </tr>
                    ) : (
                        todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}