import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <span className="navBarLogo">
        <i className="controlsTextSize2 fa fa-check-square"></i>
      </span>
      <div className="navBarFlex">
        <Link to="/" className="navBarElement">
          <span>ToDo App</span>
        </Link>
        <Link to="/dashboard" className="navBarElement">
          <span>Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
