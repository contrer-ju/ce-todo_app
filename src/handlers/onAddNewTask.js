import { DAYS } from "../constant/various";

export default function onAddNewTask(
  taskList,
  setTaskList,
  newTask,
  setNewTask,
  newDurationTask,
  setNewDurationTask,
  taskStatus
) {
  if (newTask !== "" && newDurationTask !== "") {
    const hours = Number(newDurationTask.substring(0, 2));
    const minutes = Number(newDurationTask.substring(3, 5));
    const seconds = Number(newDurationTask.substring(6));

    if ((hours === 2 && minutes === 0 && seconds === 0) || hours < 2) {
      let durationType = "";
      if (
        (hours === 0 && minutes < 30) ||
        (hours === 0 && minutes === 30 && seconds === 0)
      )
        durationType = "short";
      if (
        (hours === 0 && minutes === 30 && seconds > 0) ||
        (hours === 0 && minutes > 30) ||
        (hours === 1 && minutes === 0 && seconds === 0)
      )
        durationType = "medium";
      if (
        (hours === 1 && minutes === 0 && seconds > 0) ||
        (hours === 1 && minutes > 0) ||
        hours > 1
      )
        durationType = "long";

      let aTaskList = JSON.parse(JSON.stringify(taskList));
      aTaskList.push({
        order: aTaskList.length + 1,
        id: Date.now(),
        task: newTask,
        duration: newDurationTask,
        durationTypes: durationType,
        status: taskStatus,
        day: DAYS[Math.floor(Math.random() * 7)],
      });

      setNewTask("");
      setNewDurationTask("");
      setTaskList(aTaskList);
    } else {
      alert("Please enter a time duration of a maximum of 2 hours");
    }
  }
}
