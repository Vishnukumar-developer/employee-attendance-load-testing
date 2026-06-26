import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {

      localStorage.setItem("isLoggedIn", "true");

      navigate("/");

    } else {

      alert("Invalid Username or Password");

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>🔐 Employee Attendance Portal</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p>
          Demo Login:
          <br />
          Admin → admin / admin123
        </p>

      </div>

    </div>
  );
}

export default Login;