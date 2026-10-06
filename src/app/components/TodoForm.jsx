"use client";

import { useState } from "react";

export default function TodoForm({ onAdd }) {
    const [task, setTask] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (task == "") return;
        onAdd(task);
        setTask("");
    };

    return (
        <form onSubmit={handleAdd} className="flex items-center justify-center">
            <input
                type="text"
                placeholder="Enter Your Task"
                className="w-80 border border-gray-300 rounded-lg p-2.5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition ms-4 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm cursor-pointer"
            >
                Add
            </button>
        </form>
    );
}