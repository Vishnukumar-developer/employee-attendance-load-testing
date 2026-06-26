import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h1>Employee Attendance Portal</h1>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;