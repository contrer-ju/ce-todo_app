import ReactTooltip from "react-tooltip";

export default function UpdateList({
  taskList,
  setTaskList,
  newTask,
  setNewTask,
  newDurationTask,
  setNewDurationTask,
  onAddNewTask,
  updateTask,
  setUpdateTask,
  updateTaskID,
  setUpdateTaskID,
  updateDurationTask,
  setUpdateDurationTask,
  onUpdateTask,
}) {
  return (
    <div className="updateListLayout">
      <div>
        <span>Add a new task</span>
        <div className="boxItemListLayout solidBorder">
          <div className="groupFieldsListLayout">
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Task:</div>
              <input
                className="filtersTextSize"
                value={newTask}
                type="text"
                onInput={(event) => setNewTask(event.target.value)}
              />
            </div>
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Duration:</div>
              <input
                className="filtersTextSize"
                value={newDurationTask}
                type="time"
                onInput={(event) => setNewDurationTask(event.target.value)}
                step="1"
              />
              <div className="radioButtomsLayout">
                <span>
                  <input
                    type="radio"
                    name="predefinedTime"
                    onChange={() => setNewDurationTask("00:30")}
                    checked={newDurationTask === "00:30"}
                  />
                  {" 30m"}
                </span>
                <span>
                  <input
                    type="radio"
                    name="predefinedTime"
                    onChange={() => setNewDurationTask("00:45")}
                    checked={newDurationTask === "00:45"}
                  />
                  {" 45m"}
                </span>
                <span>
                  <input
                    type="radio"
                    name="predefinedTime"
                    onChange={() => setNewDurationTask("01:00")}
                    checked={newDurationTask === "01:00"}
                  />
                  {" 60m"}
                </span>
              </div>
            </div>
          </div>
          <i
            data-tip="Add Task"
            className="controlsTextSize fa fa-plus-square-o cursorPointer"
            onClick={() =>
              onAddNewTask(
                taskList,
                setTaskList,
                newTask,
                setNewTask,
                newDurationTask,
                setNewDurationTask,
                "Pending"
              )
            }
          ></i>
        </div>
      </div>
      <div>
        <span>Please select a task to update</span>
        <div className="boxItemListLayout solidBorder">
          <div className="groupFieldsListLayout">
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Task:</div>
              <input
                className="filtersTextSize"
                type="text"
                disabled={updateTask === "" && updateDurationTask === ""}
                value={updateTask}
                onChange={(event) => setUpdateTask(event.target.value)}
              />
            </div>
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Duration:</div>
              <input
                className="filtersTextSize"
                type="time"
                disabled={updateTask === "" && updateDurationTask === ""}
                value={updateDurationTask}
                onChange={(event) => setUpdateDurationTask(event.target.value)}
                step="1"
              />
              <div className="radioButtomsLayout">
                <span>
                  <input
                    type="radio"
                    name="predefinedUpdateTime"
                    onChange={() => setUpdateDurationTask("00:30")}
                    checked={updateDurationTask === "00:30"}
                    disabled={updateTask === "" && updateDurationTask === ""}
                  />
                  {" 30m"}
                </span>
                <span>
                  <input
                    type="radio"
                    name="predefinedUpdateTime"
                    onChange={() => setUpdateDurationTask("00:45")}
                    checked={updateDurationTask === "00:45"}
                    disabled={updateTask === "" && updateDurationTask === ""}
                  />
                  {" 45m"}
                </span>
                <span>
                  <input
                    type="radio"
                    name="predefinedUpdateTime"
                    onChange={() => setUpdateDurationTask("01:00")}
                    checked={updateDurationTask === "01:00"}
                    disabled={updateTask === "" && updateDurationTask === ""}
                  />
                  {" 60m"}
                </span>
              </div>
            </div>
          </div>
          <i
            data-tip="Update Task"
            className={
              updateTask === "" && updateDurationTask === ""
                ? "controlsTextSize fa fa-sign-in disableColor"
                : "controlsTextSize fa fa-sign-in cursorPointer"
            }
            onClick={() =>
              onUpdateTask(
                taskList,
                setTaskList,
                updateTask,
                setUpdateTask,
                updateTaskID,
                setUpdateTaskID,
                updateDurationTask,
                setUpdateDurationTask
              )
            }
          ></i>
        </div>
      </div>
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}
