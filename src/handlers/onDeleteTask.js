export default function onDeleteTask(
  taskList,
  setTaskList,
  updateTaskID,
  taskID
) {
  if (updateTaskID === taskID) {
    alert(
      "You are trying to delete a task that is being updated. Please finish the update before executing another action."
    );
  } else {
    let aTaskList = JSON.parse(JSON.stringify(taskList));

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === taskID) {
        aTaskList.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < aTaskList.length; i++)
      if (i + 1 !== aTaskList[i].order) aTaskList[i].order = i + 1;

    setTaskList(aTaskList);
  }
}
