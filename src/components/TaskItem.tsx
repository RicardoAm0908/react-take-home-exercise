import React from "react";
import Button from "./Button";

const TaskItem = ({ task, onDelete, onToggle }: any) => {
  return (
    <li className="border-b border-b-dark-gray-600 py-0 mt-4 ">
      <label htmlFor={"checkbox" + task.id} className="flex justify-between cursor-pointer">
        <div className="flex gap-4 items-center">
          <input type="checkbox" id={"checkbox" + task.id} name="option" 
            className="hidden peer" 
            checked={task.completed} 
            onChange={() => onToggle(task.id)}
          ></input>
          <div className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:bg-green-500 peer-checked:border-white 
                          hover:border-green-400 focus:ring-2 focus:ring-green-500"></div>
          <span
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-300" : "text-white"
            }`}
            >
            {task.title}
          </span>
        </div>

        <Button
            type="delete"
            customClass="rounded bg-red-500 text-white py-2 px-2 hover:bg-red-600"
            action={onDelete}
            params={task}
            value="Delete"
          />
      </label>
    </li>
  );
};

export default TaskItem;
