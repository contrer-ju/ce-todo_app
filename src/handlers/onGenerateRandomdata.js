import randomTask from "../constant/data.json";

export default function onGenerateRandomdata(taskList, setTaskList) {
  let aTaskList = JSON.parse(JSON.stringify(taskList));

  for (const element of randomTask) {
    const hours = Number(element.duration.substring(0, 2));
    const minutes = Number(element.duration.substring(3, 5));

    let durationType = "";
    if (hours === 0 && minutes <= 30) durationType = "short";
    if ((hours === 0 && minutes > 30) || (hours === 1 && minutes === 0))
      durationType = "medium";
    if ((hours === 1 && minutes > 0) || hours > 1) durationType = "long";

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
    });
  }

  setTaskList(aTaskList);
}
