import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>

        <li>
          <Link to="/">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/attendance">📝 Attendance</Link>
        </li>

        <li>
          <Link to="/history">🗓️ History</Link>
        </li>

        <li>
          <Link to="/admin">👨‍💼 Admin</Link>
        </li>

       <li>
  <Link to="/server-monitor">
    ⚙️ Server Monitor
  </Link>
</li>
      </ul>
    </div>
  );
}

export default Sidebar;