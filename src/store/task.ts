import Task from "../interfaces/task.interface";

export const getFromLocalStorage = () : Task[]=> {
    let returnObj: Task[] = [];
    const storageObj = localStorage.getItem('tasks') || '';
    if (storageObj) returnObj = JSON.parse(storageObj);
    return returnObj;
}

export const setOnLocalStorage = (taskList: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}