import React from "react";

const TaskItem = ({ task, onDelete, onToggle }: any) => {
  return (
    <li className="flex items-center justify-between border-b py-0">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-green-500" : "text-black"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="rounded bg-red-600 text-white py-2 px-2"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
