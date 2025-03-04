import React, { useState, useEffect } from "react";

import TaskItem from "./TaskItem";
import Task from "../interfaces/task.interface";
import Menu from "./Menu";
import { getFromLocalStorage, setOnLocalStorage } from "../store/task";

const TaskManager = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("All");

  // Get tasks from the local storage on the page mount
  useEffect(() => {
    setSelectedFilters();
    setTasks(getFromLocalStorage());
  }, []);

  useEffect(() => {
    setSelectedFilters();
  }, [filter])

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
    <div className="container flex flex-col lg:flex-row mx-auto pt-8 justify-around items-center">
      <div className="w-full lg:px-16 self-start">
        <h2 className="mb-4 text-white text-2xl text-bold">Insert new tasks on the list: </h2>
        <form onSubmit={handleAddTask} className="mb-16 flex">
          <input
            type="text"
            placeholder="New task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow rounded-l py-2 px-3 bg-dark-gray-900 text-white"
            />
          <button type="submit" className="bg-blue-500 text-white px-6 rounded-r">
            Add
          </button>
        </form>
      </div>
      <div className="w-full lg:px-8 lg:border-l-2 lg:border-l-dark-gray-600">
          <Menu
            setFilter={setFilter}
            setFilterName={setFilterName}
            setSelectedFilters={setSelectedFilters}
            />
          <ul className="p-4 bg-dark-gray-900 rounded shadow min-h-128">
          <h2 className="mb-4 text-white text-3xl text-bold text-center">{filterName + ' tasks'}!</h2>
          {filteredTasks.length > 0 ?
            filteredTasks.map((task) => (
              <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onToggle={toggleTaskCompletion}
              />
            ))
          :
            <div className="flex flex-col">
              <span className="mt-8 text-white text-1xl text-center">{"There are no " + (filter === 'all' ? '' : (filterName + ' ')) + 'tasks yet'}</span>
              <span className="text-white text-1xl text-center">{
                  filter === 'completed' ?
                  "Complete a task to see on this list!"
                    :            
                  "Add a new one and start to control your tasks!"
                }
              </span>
            </div>
          }
          </ul>
        </div>
    </div>
  );
};

export default TaskManager;
