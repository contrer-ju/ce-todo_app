export default function onSelectTask(
  updateTask,
  setUpdateTask,
  updateTaskID,
  setUpdateTaskID,
  updateDurationTask,
  setUpdateDurationTask,
  task,
  taskID,
  taskDuration
) {
  if (updateTask === "" && updateDurationTask === "") {
    setUpdateTask(task);
    setUpdateTaskID(taskID);
    setUpdateDurationTask(taskDuration);
  } else {
    alert(
      "You are trying to update a task while another task is being updated. Finish the update before running another action."
    );
  }
}
