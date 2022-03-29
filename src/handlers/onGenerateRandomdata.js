import randomTask from "../constant/task.json";
import { DAYS } from "../constant/various";

export default function onGenerateRandomdata(taskList, setTaskList) {
  let aTaskList = JSON.parse(JSON.stringify(taskList));

  for (const element of randomTask) {
    const hours = Number(element.duration.substring(0, 2));
    const minutes = Number(element.duration.substring(3, 5));
    const seconds = Number(element.duration.substring(6));

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

    aTaskList.push({
      order: aTaskList.length + 1,
      id:
        Math.random().toString(36).substring(2, 4) +
        "-" +
        (aTaskList.length + 1),
      task: element.task,
      duration: element.duration,
      durationTypes: durationType,
      status: "Completed",
      day: DAYS[Math.floor(Math.random() * 7)],
    });
  }

  setTaskList(aTaskList);
}
