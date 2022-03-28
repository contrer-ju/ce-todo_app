import { useState } from "react";

const useTaskStates = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDurationTask, setNewDurationTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");
  const [updateTaskID, setUpdateTaskID] = useState("");
  const [updateDurationTask, setUpdateDurationTask] = useState("");
  const [taskToDo, setTaskToDo] = useState("");
  const [taskToDoDuration, setTaskToDoDuration] = useState("00:00");

  return {
    taskList,
    setTaskList,
    newTask,
    setNewTask,
    newDurationTask,
    setNewDurationTask,
    updateTask,
    setUpdateTask,
    updateTaskID,
    setUpdateTaskID,
    updateDurationTask,
    setUpdateDurationTask,
    taskToDo,
    setTaskToDo,
    taskToDoDuration,
    setTaskToDoDuration,
  };
};

export default useTaskStates;
