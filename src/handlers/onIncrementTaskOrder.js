export default function onIncrementTaskOrder(taskList, setTaskList, taskID) {
  let aTaskList = JSON.parse(JSON.stringify(taskList));

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === taskID && taskList[i].order !== 1) {
      const newUpperTask = aTaskList[i].task;
      const newUpperDuration = aTaskList[i].duration;
      const newUpperStatus = aTaskList[i].status;
      const newUpperDurationTypes = aTaskList[i].durationTypes

      const newLowerTask = aTaskList[i - 1].task;
      const newLowerDuration = aTaskList[i - 1].duration;
      const newLowerStatus = aTaskList[i - 1].status;
      const newLowerDurationTypes = aTaskList[i - 1].durationTypes

      aTaskList[i].task = newLowerTask;
      aTaskList[i].duration = newLowerDuration;
      aTaskList[i].status = newLowerStatus;
      aTaskList[i].durationTypes = newLowerDurationTypes;

      aTaskList[i - 1].task = newUpperTask;
      aTaskList[i - 1].duration = newUpperDuration;
      aTaskList[i - 1].status = newUpperStatus;
      aTaskList[i - 1].durationTypes = newUpperDurationTypes;

      setTaskList(aTaskList);
      break;
    }
  }
}
