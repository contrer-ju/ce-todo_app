export default function onAddNewTask(
  taskList,
  setTaskList,
  newTask,
  setNewTask,
  newDurationTask,
  setNewDurationTask
) {
  if (newTask !== "" && newDurationTask !== "") {
    const hours = Number(newDurationTask.substring(0, 2));
    const minutes = Number(newDurationTask.substring(3));
    if ((hours === 2 && minutes === 0) || hours < 2) {
      let aTaskList = JSON.parse(JSON.stringify(taskList));
      aTaskList.push({
        order: aTaskList.length + 1,
        id: Date.now(),
        task: newTask,
        duration: newDurationTask,
        status: "Pending",
      });

      setNewTask("");
      setNewDurationTask("");
      setTaskList(aTaskList);
    } else {
      alert("Please enter a time duration of a maximum of 2 hours");
    }
  }
}
