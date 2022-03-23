export default function TaskList() {
  return (
    <div className="taskListLayout table-striped table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order</th>
            <th scope="col">Select</th>
            <th scope="col">Task</th>
            <th scope="col">Duration</th>
            <th scope="col">Status</th>
            <th scope="col">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0</th>
            <td>
              <input type="radio" onChange={() => console.log("Radio1")} />
            </td>
            <td>Walk</td>
            <td>00:45:00</td>
            <td>In action</td>
            <td>
              <div className="tableControlsSize">
                <i className="controlsTextSize3 fa fa-trash"></i>
                <i className="controlsTextSize3 fa fa-pencil"></i>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>
              <input type="radio" onChange={() => console.log("Radio2")} />
            </td>
            <td>Laundry</td>
            <td>01:20:00</td>
            <td>Pending</td>
            <td>
              <div className="tableControlsSize">
                <i className="controlsTextSize3 fa fa-trash"></i>
                <i className="controlsTextSize3 fa fa-pencil"></i>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <input type="radio" onChange={() => console.log("Radio3")} />
            </td>
            <td>Dinner</td>
            <td>00:45:00</td>
            <td>Completed</td>
            <td>
              <div className="tableControlsSize">
                <i className="controlsTextSize3 fa fa-trash"></i>
                <i className="controlsTextSize3 fa fa-pencil"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
