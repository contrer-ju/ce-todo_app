import { BrowserRouter, Routes, Route } from "react-router-dom";

import ControlTime from "./components/ControlTime";
import FilterList from "./components/FilterList";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import UpdateList from "./components/UpdateList";

import onAddNewTask from "./handlers/onAddNewTask";
import onDeleteTask from "./handlers/onDeleteTask";
import onSelectTask from "./handlers/onSelectTask";
import onUpdateTask from "./handlers/onUpdateTask";
import onIncrementOrderTask from "./handlers/onIncrementOrderTask";
import onDecrementOrderTask from "./handlers/onDecrementOrderTask";

import useTaskStates from "./hooks/useTaskStates";
import useFiltersStates from "./hooks/useFiltersStates";

function App() {
  const {
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
  } = useTaskStates();
  const {
    taskFilter,
    setLowerCaseOfTaskFilter,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
  } = useFiltersStates();

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainLayout">
              <FilterList
                {...{
                  setLowerCaseOfTaskFilter,
                  statusFilter,
                  setStatusFilter,
                  durationFilter,
                  setDurationFilter,
                }}
              />
              <ControlTime />
              <TaskList
                {...{
                  taskList,
                  setTaskList,
                  onDeleteTask,
                  onSelectTask,
                  updateTask,
                  setUpdateTask,
                  updateTaskID,
                  setUpdateTaskID,
                  updateDurationTask,
                  setUpdateDurationTask,
                  onIncrementOrderTask,
                  onDecrementOrderTask,
                  taskFilter,
                  statusFilter,
                  durationFilter,
                }}
              />
              <UpdateList
                {...{
                  taskList,
                  setTaskList,
                  newTask,
                  setNewTask,
                  newDurationTask,
                  setNewDurationTask,
                  onAddNewTask,
                  updateTask,
                  setUpdateTask,
                  updateTaskID,
                  setUpdateTaskID,
                  updateDurationTask,
                  setUpdateDurationTask,
                  onUpdateTask,
                }}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
