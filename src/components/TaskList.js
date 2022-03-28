import ReactTooltip from "react-tooltip";

export default function TaskList({
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
}) {
  let filterTaskList = taskList
    .filter((filterTasksByTask) =>
      filterTasksByTask.task.toLowerCase().includes(taskFilter)
    )
    .filter((filterTasksByStatus) =>
      filterTasksByStatus.status.includes(statusFilter)
    )
    .filter((filterTasksByDuration) =>
      filterTasksByDuration.durationTypes.includes(durationFilter)
    );

  return (
    <div className="taskListLayout table-responsive">
      <div className="topIconsAlign">
        <i
          data-tip="Empty List"
          className="controlsTextSize2 fa fa-trash cursorPointer"
          onClick={() => setTaskList([])}
        ></i>
        <i
          data-tip="Load Random Data"
          className="controlsTextSize3 fa fa-database cursorPointer"
          onClick={() => onGenerateRandomdata(taskList, setTaskList)}
        ></i>
      </div>
      <div className="wrapperTable">
        <table className="table">
          <thead className="headTable">
            <tr>
              <th scope="col">Order</th>
              <th scope="col">Task</th>
              <th scope="col">Duration</th>
              <th scope="col">Status</th>
              <th scope="col">Controls</th>
            </tr>
          </thead>
          <tbody>
            {taskList.length === 0 && (
              <tr>
                <td className="centerText" colSpan="5">
                  No items on the list, please add some.
                </td>
              </tr>
            )}
            {taskList.length !== 0 && filterTaskList.length === 0 && (
              <tr>
                <td className="centerText" colSpan="5">
                  There aren't matches with the filter criteria.
                </td>
              </tr>
            )}
            {taskList.length !== 0 &&
              filterTaskList.length !== 0 &&
              filterTaskList.map((taskItem) => (
                <tr key={taskItem.id}>
                  <th scope="row">{taskItem.order}</th>
                  <td>{taskItem.task}</td>
                  <td>
                    {taskItem.duration.length === 5
                      ? taskItem.duration + ":00"
                      : taskItem.duration}
                  </td>
                  <td>{taskItem.status}</td>
                  <td className="cellTableLayout">
                    <div className="iconsControlsSize">
                      <i
                        className="controlsTextSize3 fa fa-trash cursorPointer"
                        onClick={() =>
                          onDeleteTask(
                            taskList,
                            setTaskList,
                            updateTaskID,
                            taskItem.id
                          )
                        }
                      ></i>
                      <i
                        className={
                          taskItem.status === "Pending"
                            ? "controlsTextSize3 fa fa-pencil cursorPointer"
                            : "controlsTextSize3 fa fa-pencil disableColor"
                        }
                        onClick={() => {
                          if (taskItem.status === "Pending") {
                            onSelectTaskToEdit(
                              updateTask,
                              setUpdateTask,
                              setUpdateTaskID,
                              updateDurationTask,
                              setUpdateDurationTask,
                              taskItem.task,
                              taskItem.id,
                              taskItem.duration
                            );
                          }
                        }}
                      ></i>
                    </div>
                    <div className="iconsControlsSize">
                      <i
                        className={
                          taskItem.order === taskList.length
                            ? "controlsTextSize3 fa fa-arrow-down disableColor"
                            : "controlsTextSize3 fa fa-arrow-down cursorPointer"
                        }
                        onClick={() =>
                          onDecrementTaskOrder(
                            taskList,
                            setTaskList,
                            taskItem.id
                          )
                        }
                      ></i>
                      <i
                        className={
                          taskItem.order === 1
                            ? "controlsTextSize3 fa fa-arrow-up disableColor"
                            : "controlsTextSize3 fa fa-arrow-up cursorPointer"
                        }
                        onClick={() =>
                          onIncrementTaskOrder(
                            taskList,
                            setTaskList,
                            taskItem.id
                          )
                        }
                      ></i>
                    </div>
                    <i
                      className={
                        taskItem.status === "Pending"
                          ? "controlsTextSize3 fa fa-cogs cursorPointer"
                          : "controlsTextSize3 fa fa-cogs disableColor"
                      }
                      onClick={() => {
                        if (taskItem.status === "Pending") {
                          onSelectTaskToDo(
                            taskList,
                            setTaskList,
                            taskItem.id,
                            taskToDo,
                            setTaskToDo,
                            taskToDoDuration,
                            setTaskToDoDuration,
                            setSecondsCounter,
                            setMinutesCounter,
                            setHoursCounter
                          );
                        }
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}
