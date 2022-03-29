import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import RunningTask from "./components/RunningTask";
import FilterList from "./components/FilterList";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import UpdateList from "./components/UpdateList";
import Dashboard from "./components/Dashboard";

import onAddNewTask from "./handlers/onAddNewTask";
import onDeleteTask from "./handlers/onDeleteTask";
import onSelectTaskToEdit from "./handlers/onSelectTaskToEdit";
import onUpdateTask from "./handlers/onUpdateTask";
import onIncrementTaskOrder from "./handlers/onIncrementTaskOrder";
import onDecrementTaskOrder from "./handlers/onDecrementTaskOrder";
import onSelectTaskToDo from "./handlers/onSelectTaskToDo";
import onCalculateSecondsDifference from "./handlers/onCalculateSecondsDifference";
import onGenerateRandomdata from "./handlers/onGenerateRandomdata";
import onMappingPieChartData from "./handlers/onMappingPieChartData";
import onMappingLineChartData from "./handlers/onMappingLineChartData";

import useTaskStates from "./hooks/useTaskStates";
import useFiltersStates from "./hooks/useFiltersStates";
import useTimeStates from "./hooks/useTimeStates";

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
    taskToDo,
    setTaskToDo,
    taskToDoDuration,
    setTaskToDoDuration,
  } = useTaskStates();
  const {
    taskFilter,
    setLowerCaseOfTaskFilter,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
  } = useFiltersStates();

  const {
    secondsCounter,
    setSecondsCounter,
    minutesCounter,
    setMinutesCounter,
    hoursCounter,
    setHoursCounter,
    startCountdown,
    setStartCountdown,
    playSelected,
    setPlaySelected,
    pauseSelected,
    setPauseSelected,
    finishCountdown,
    setFinishCountdown,
  } = useTimeStates();

  useEffect(() => {
    if (finishCountdown) {
      onAddNewTask(
        taskList,
        setTaskList,
        taskToDo,
        setNewTask,
        onCalculateSecondsDifference(
          taskToDoDuration,
          hoursCounter,
          minutesCounter,
          secondsCounter
        ),
        setNewDurationTask,
        "Completed"
      );
      setTaskToDo("");
      setTaskToDoDuration("00:00");
      setFinishCountdown(false);
    }
  }, [
    finishCountdown,
    hoursCounter,
    minutesCounter,
    secondsCounter,
    setFinishCountdown,
    setNewDurationTask,
    setNewTask,
    setTaskList,
    setTaskToDo,
    setTaskToDoDuration,
    taskList,
    taskToDo,
    taskToDoDuration,
  ]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainLayout">
              <div className="topSectionLayout">
                <FilterList
                  {...{
                    setLowerCaseOfTaskFilter,
                    statusFilter,
                    setStatusFilter,
                    durationFilter,
                    setDurationFilter,
                  }}
                />
                <RunningTask
                  {...{
                    taskToDo,
                    setTaskToDo,
                    taskToDoDuration,
                    setTaskToDoDuration,
                    secondsCounter,
                    setSecondsCounter,
                    minutesCounter,
                    setMinutesCounter,
                    hoursCounter,
                    setHoursCounter,
                    setStartCountdown,
                    playSelected,
                    setPlaySelected,
                    pauseSelected,
                    setPauseSelected,
                    onAddNewTask,
                    taskList,
                    setTaskList,
                    setNewTask,
                    setNewDurationTask,
                    onCalculateSecondsDifference,
                  }}
                />
              </div>
              <TaskList
                {...{
                  taskList,
                  setTaskList,
                  onDeleteTask,
                  onSelectTaskToEdit,
                  updateTask,
                  setUpdateTask,
                  updateTaskID,
                  setUpdateTaskID,
                  updateDurationTask,
                  setUpdateDurationTask,
                  onIncrementTaskOrder,
                  onDecrementTaskOrder,
                  taskFilter,
                  statusFilter,
                  durationFilter,
                  onSelectTaskToDo,
                  taskToDo,
                  setTaskToDo,
                  taskToDoDuration,
                  setTaskToDoDuration,
                  setSecondsCounter,
                  setMinutesCounter,
                  setHoursCounter,
                  onGenerateRandomdata,
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
        <Route
          path="dashboard"
          element={
            <div className="mainLayout">
              <Dashboard
                {...{
                  startCountdown,
                  setStartCountdown,
                  setPlaySelected,
                  setPauseSelected,
                  taskList,
                  taskToDo,
                  onMappingPieChartData,
                  onMappingLineChartData,
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
