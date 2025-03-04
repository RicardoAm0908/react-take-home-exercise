import React from "react";

import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="min-h-screen bg-dark-gray-800 p-4">
      <header className="flex lg:flex-row flex-col text-center mb-4 justify-center gap-4">
        <img src="src\static\img\logo-fit.png" className="w-1/4 lg:w-1/2 max-w-xss mx-auto lg:mx-0"></img>
        <h1 className="text-3xl font-bold text-white content-center">Task Manager</h1>
      </header>

      <TaskManager />
    </div>
  );
}

export default App;
