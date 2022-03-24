export default function onIncrementOrderTask(taskList, setTaskList, taskID) {
  let aTaskList = JSON.parse(JSON.stringify(taskList));

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === taskID && taskList[i].order !== 1) {
      const newUpperTask = aTaskList[i].task;
      const newUpperDuration = aTaskList[i].duration;
      const newUpperStatus = aTaskList[i].status;

      const newLowerTask = aTaskList[i - 1].task;
      const newLowerDuration = aTaskList[i - 1].duration;
      const newLowerStatus = aTaskList[i - 1].status;

      aTaskList[i].task = newLowerTask;
      aTaskList[i].duration = newLowerDuration;
      aTaskList[i].status = newLowerStatus;

      aTaskList[i - 1].task = newUpperTask;
      aTaskList[i - 1].duration = newUpperDuration;
      aTaskList[i - 1].status = newUpperStatus;

      setTaskList(aTaskList);
      break;
    }
  }
}
