import React, { useState, useEffect } from "react";

import TaskItem from "./TaskItem";
import Task from "../interfaces/task.interface";
import Menu from "./Menu";
import { getFromLocalStorage, setOnLocalStorage } from "../store/task";

const TaskManager = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState<string>("");

  // Get tasks from the local storage on the page mount
  useEffect(() => {
    setTasks(getFromLocalStorage());
  }, []);

  // Update the state list (not have to go to the localstorage every time to get data) and the localStorage.
  const updateTasksList = (newList: Task[]) => {
    setTasks(newList);
    setOnLocalStorage(newList);
  }

  const setSelectedFilters = () => {
    const filters = document.querySelectorAll('.filter-button');
    filters.forEach(f => {
      if(f.id === filter + 'Button') f.classList.add('border-b-2', 'border-b-white', 'font-bold');
      else f.classList.remove('border-b-2', 'border-b-white', 'font-bold');
    });
  };

  const filteredTasks = tasks.filter((task) => {
    setSelectedFilters();
    if (filter === "completed") return task.completed === true;
    if (filter === "pending") return task.completed === false;
    return true;
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask!.trim() === "") return;
    const newTaskObj: Task = {
      id: tasks.reduce((max, item) => Math.max(max, item.id), 0) + 1,
      title: newTask,
      completed: false,
    };
    updateTasksList([...tasks, newTaskObj]);
    setNewTask("");
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    updateTasksList(updatedTasks);
  };

  const toggleTaskCompletion = (id: number) => {
    //Update function to get new tasks list to update and use states;
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    updateTasksList(updatedTasks);
  };

 

  return (
    <div className="container mx-auto border-gray-600 border-2 bg-gray-700 p-4 rounded shadow">
      <form onSubmit={handleAddTask} className="mb-4 flex">
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow rounded-l py-2 px-3 bg-gray-800"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
          Add
        </button>
      </form>
      <Menu
        setFilter={setFilter}
      />
      
        {/* <button 
          id="allButton"
          onClick={() => setFilter("all")} 
          className="filter-button text-white font-bold px-2"
        >
          All
        </button>
        <button
          id="completedButton"
          onClick={() => setFilter("completed")}
          className="filter-button text-white font-bold px-2"
        >
          Completed
        </button>
        <button 
          id="pendingButton"
          onClick={() => setFilter("pending")} 
          className="filter-button text-white font-bold px-2"
        >
          Pending
        </button> */}
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggle={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
