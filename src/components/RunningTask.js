import ReactTooltip from "react-tooltip";

export default function RunningTask({
  taskToDo,
  setTaskToDo,
  taskToDoDuration,
  setTaskToDoDuration,
  secondsCounter,
  setSecondsCounter,
  minutesCounter,
  setMinutesCounter,
  hoursCounter,
  setHoursCounter,
  setStartCountdown,
  playSelected,
  setPlaySelected,
  pauseSelected,
  setPauseSelected,
  onAddNewTask,
  taskList,
  setTaskList,
  setNewTask,
  setNewDurationTask,
  onCalculateSecondsDifference,
}) {
  return (
    <div>
      <span>Running task </span>
      <i className="controlsTextSize4 fa fa-cogs"></i>
      <div className="boxItemListLayout solidBorder">
        <div className="groupFieldsListLayout">
          <div className="itemFieldsListLayout">
            <div className="fieldLabelSize">To Do:</div>
            <input
              className="filtersTextSize"
              type="text"
              disabled={taskToDo === ""}
              value={taskToDo}
              readOnly
            />
          </div>
          <div className="itemFieldsListLayout">
            <div className="fieldLabelSize">Duration:</div>
            <div className="timeControlsLayout">
              <input
                className="filtersTextSize"
                type="time"
                disabled={taskToDo === ""}
                value={
                  hoursCounter + ":" + minutesCounter + ":" + secondsCounter
                }
                step="1"
                readOnly
              />
              <i
                data-tip="Start Timer"
                className={
                  taskToDo === ""
                    ? "controlsTextSize fa fa-play-circle-o disableColor"
                    : playSelected
                    ? "controlsTextSize fa fa-play-circle cursorPointer"
                    : "controlsTextSize fa fa-play-circle-o cursorPointer"
                }
                onClick={() => {
                  if (
                    !(
                      secondsCounter === "00" &&
                      minutesCounter === "00" &&
                      hoursCounter === "00"
                    )
                  ) {
                    setStartCountdown(true);
                    setPlaySelected(true);
                    setPauseSelected(false);
                  }
                }}
              ></i>
              <i
                data-tip="Pause Timer"
                className={
                  taskToDo === ""
                    ? "controlsTextSize fa fa-pause-circle-o disableColor"
                    : pauseSelected
                    ? "controlsTextSize fa fa-pause-circle cursorPointer"
                    : "controlsTextSize fa fa-pause-circle-o cursorPointer"
                }
                onClick={() => {
                  if (
                    !(
                      secondsCounter === "00" &&
                      minutesCounter === "00" &&
                      hoursCounter === "00"
                    )
                  ) {
                    setStartCountdown(false);
                    setPlaySelected(false);
                    setPauseSelected(true);
                  }
                }}
              ></i>
              <i
                data-tip="Refresh Timer"
                className={
                  taskToDo === "" ||
                  (secondsCounter === "00" &&
                    minutesCounter === "00" &&
                    hoursCounter === "00")
                    ? "controlsTextSize2 fa fa-refresh disableColor"
                    : "controlsTextSize2 fa fa-refresh cursorPointer"
                }
                onClick={() => {
                  if (
                    !(
                      secondsCounter === "00" &&
                      minutesCounter === "00" &&
                      hoursCounter === "00"
                    )
                  ) {
                    setStartCountdown(false);
                    setPlaySelected(false);
                    setPauseSelected(false);
                    setSecondsCounter(
                      taskToDoDuration.length === 5
                        ? "00"
                        : taskToDoDuration.substring(6)
                    );
                    setMinutesCounter(taskToDoDuration.substring(3, 5));
                    setHoursCounter(taskToDoDuration.substring(0, 2));
                  }
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="timeControlsFlex">
          <i
            data-tip="Cancel Task"
            className={
              taskToDo === ""
                ? "controlsTextSize fa fa-times-circle-o disableColor"
                : "controlsTextSize fa fa-times-circle-o cursorPointer"
            }
            onClick={() => {
              if (
                !(
                  secondsCounter === "00" &&
                  minutesCounter === "00" &&
                  hoursCounter === "00"
                )
              ) {
                onAddNewTask(
                  taskList,
                  setTaskList,
                  taskToDo,
                  setNewTask,
                  taskToDoDuration,
                  setNewDurationTask,
                  "Pending"
                );
                setStartCountdown(false);
                setPlaySelected(false);
                setPauseSelected(false);
                setSecondsCounter("00");
                setMinutesCounter("00");
                setHoursCounter("00");
                setTaskToDo("");
                setTaskToDoDuration("00:00");
              }
            }}
          ></i>
          <i
            data-tip="Finish Task"
            className={
              taskToDo === ""
                ? "controlsTextSize fa fa-check-circle-o disableColor"
                : "controlsTextSize fa fa-check-circle-o cursorPointer"
            }
            onClick={() => {
              if (
                !(
                  secondsCounter === "00" &&
                  minutesCounter === "00" &&
                  hoursCounter === "00"
                )
              ) {
                onAddNewTask(
                  taskList,
                  setTaskList,
                  taskToDo,
                  setNewTask,
                  onCalculateSecondsDifference(
                    taskToDoDuration,
                    hoursCounter,
                    minutesCounter,
                    secondsCounter
                  ),
                  setNewDurationTask,
                  "Completed"
                );
                setStartCountdown(false);
                setPlaySelected(false);
                setPauseSelected(false);
                setSecondsCounter("00");
                setMinutesCounter("00");
                setHoursCounter("00");
                setTaskToDo("");
                setTaskToDoDuration("00:00");
              }
            }}
          ></i>
        </div>
      </div>
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}
