export default function TaskList({
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
      <table className="table">
        <thead>
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
                <td>{taskItem.duration}</td>
                <td>{taskItem.status}</td>
                <td className="cellTableLayout">
                  <div className="iconsControlsSize">
                    <i
                      className="controlsTextSize3 fa fa-trash"
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
                      className="controlsTextSize3 fa fa-pencil"
                      onClick={() =>
                        onSelectTask(
                          updateTask,
                          setUpdateTask,
                          setUpdateTaskID,
                          updateDurationTask,
                          setUpdateDurationTask,
                          taskItem.task,
                          taskItem.id,
                          taskItem.duration
                        )
                      }
                    ></i>
                  </div>
                  <div className="iconsControlsSize">
                    <i
                      className={
                        taskItem.order === taskList.length
                          ? "controlsTextSize3 fa fa-arrow-down disableColor"
                          : "controlsTextSize3 fa fa-arrow-down"
                      }
                      onClick={() =>
                        onDecrementOrderTask(taskList, setTaskList, taskItem.id)
                      }
                    ></i>
                    <i
                      className={
                        taskItem.order === 1
                          ? "controlsTextSize3 fa fa-arrow-up disableColor"
                          : "controlsTextSize3 fa fa-arrow-up"
                      }
                      onClick={() =>
                        onIncrementOrderTask(taskList, setTaskList, taskItem.id)
                      }
                    ></i>
                  </div>
                  <i className="controlsTextSize3 fa fa-tasks"></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
