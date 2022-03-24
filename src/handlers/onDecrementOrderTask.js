export default function onDecrementOrderTask(taskList, setTaskList, taskID) {
  let aTaskList = JSON.parse(JSON.stringify(taskList));

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === taskID && taskList[i].order !== taskList.length) {
      const newUpperTask = aTaskList[i + 1].task;
      const newUpperDuration = aTaskList[i + 1].duration;
      const newUpperStatus = aTaskList[i + 1].status;
      const newUpperDurationTypes = aTaskList[i + 1].durationTypes

      const newLowerTask = aTaskList[i].task;
      const newLowerDuration = aTaskList[i].duration;
      const newLowerStatus = aTaskList[i].status;
      const newLowerDurationTypes = aTaskList[i].durationTypes

      aTaskList[i + 1].task = newLowerTask;
      aTaskList[i + 1].duration = newLowerDuration;
      aTaskList[i + 1].status = newLowerStatus;
      aTaskList[i + 1].durationTypes = newLowerDurationTypes;

      aTaskList[i].task = newUpperTask;
      aTaskList[i].duration = newUpperDuration;
      aTaskList[i].status = newUpperStatus;
      aTaskList[i].durationTypes = newUpperDurationTypes;

      setTaskList(aTaskList);
      break;
    }
  }
}
