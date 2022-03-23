export default function UpdateList() {
  return (
    <div className="updateListLayout">
      <div>
        <span>Add a new Task</span>
        <div className="boxItemListLayout solidBorder">
          <div className="groupFieldsListLayout">
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Task:</div>
              <input
                className="filtersTextSize"
                type="search"
                onChange={(event) => console.log(event.target.value)}
              />
            </div>
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Duration:</div>
              <input
                className="filtersTextSize"
                type="search"
                onChange={(event) => console.log(event.target.value)}
              />
            </div>
          </div>
          {/* <i className="controlsTextSize fa fa-plus-square"></i> */}
          <i className="controlsTextSize fa fa-plus-square-o"></i>
        </div>
      </div>
      <div>
        <span>Select a Task to Edit</span>
        <div className="boxItemListLayout solidBorder">
          <div className="groupFieldsListLayout">
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Task:</div>
              <input
                className="filtersTextSize"
                type="search"
                onChange={(event) => console.log(event.target.value)}
              />
            </div>
            <div className="itemFieldsListLayout">
              <div className="fieldLabelSize">Duration:</div>
              <input
                className="filtersTextSize"
                type="search"
                onChange={(event) => console.log(event.target.value)}
              />
            </div>
          </div>
          <i className="controlsTextSize fa fa-sign-in"></i>
        </div>
      </div>
    </div>
  );
}
