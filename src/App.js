import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./routes/NavBar";

import ControlTime from "./components/ControlTime";
import FilterList from "./components/FilterList";
import TaskList from "./components/TaskList";
import UpdateList from "./components/UpdateList";

function App() {
  return (
    <BrowserRouter>
      <NavBar {...{}} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainLayout">
              <ControlTime />
              <FilterList />
              <TaskList />
              <UpdateList />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
