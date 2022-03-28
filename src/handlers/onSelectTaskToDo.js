export default function onSelectTaskToDo(
  taskList,
  setTaskList,
  taskID,
  taskToDo,
  setTaskToDo,
  taskToDoDuration,
  setTaskToDoDuration,
  setSecondsCounter,
  setMinutesCounter,
  setHoursCounter
) {
  if (taskToDo !== "" && taskToDoDuration !== "00:00") {
    alert("Please finish the doing task before selecting another task to do.");
  } else {
    let aTaskList = JSON.parse(JSON.stringify(taskList));
    let itemTaskToDo;

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === taskID) {
        itemTaskToDo = aTaskList.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < aTaskList.length; i++)
      if (i + 1 !== aTaskList[i].order) aTaskList[i].order = i + 1;

    setTaskList(aTaskList);
    setTaskToDo(itemTaskToDo[0].task);
    setTaskToDoDuration(itemTaskToDo[0].duration);
    setSecondsCounter(
      itemTaskToDo[0].duration.length === 5
        ? "00"
        : itemTaskToDo[0].duration.substring(6)
    );
    setMinutesCounter(itemTaskToDo[0].duration.substring(3, 5));
    setHoursCounter(itemTaskToDo[0].duration.substring(0, 2));
  }
}
