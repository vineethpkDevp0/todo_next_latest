"use client";

import { useState, useEffect, createContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const TodoContext = createContext();

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Task 1", status: "Pending" },
    { id: 2, task: "Task 2", status: "Completed" },
    { id: 3, task: "Task 3", status: "Pending" },
  ]);

  // 1. Load saved todos once on mount
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved && saved !== "undefined") {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTodos(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse todos", e);
      }
    }
  }, []);

  // Action handlers
  const handleAddTodo = (task) => {
    const updatedTodos = [...todos, { id: Date.now(), task: task.trim(), status: "Pending" }];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleStatus = (id) => {
    const updatedTodos = todos.map((itm) =>
      itm.id === id
        ? { ...itm, status: itm.status === "Completed" ? "Pending" : "Completed" }
        : itm
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Next.js Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoContext.Provider value={{ todos, handleDeleteTodo, toggleStatus }}>
        <TodoList />
      </TodoContext.Provider>
    </main>
  );
}
