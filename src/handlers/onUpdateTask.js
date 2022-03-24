export default function onUpdateTask(
  taskList,
  setTaskList,
  updateTask,
  setUpdateTask,
  updateTaskID,
  setUpdateTaskID,
  updateDurationTask,
  setUpdateDurationTask
) {
  if (updateTask !== "" && updateDurationTask !== "") {
    const hours = Number(updateDurationTask.substring(0, 2));
    const minutes = Number(updateDurationTask.substring(3));

    if ((hours === 2 && minutes === 0) || hours < 2) {
      let aTaskList = JSON.parse(JSON.stringify(taskList));

      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === updateTaskID) {
          aTaskList[i].task = updateTask;
          aTaskList[i].duration = updateDurationTask;
          break;
        }
      }
      setTaskList(aTaskList);
      setUpdateTask("");
      setUpdateTaskID("");
      setUpdateDurationTask("");
    } else {
      alert("Please enter a time duration of a maximum of 2 hours");
    }
  }
  if (
    (updateTask === "" && updateDurationTask !== "") ||
    (updateTask !== "" && updateDurationTask === "")
  )
    alert("Please don't enter blank fields.");
}
