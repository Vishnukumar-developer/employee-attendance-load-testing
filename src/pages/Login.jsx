import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Admin Login
    if (empId === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      navigate("/");
      return;
    }

    // Employee Login
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emp_id: empId,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "employee");
        localStorage.setItem(
          "employee",
          JSON.stringify(data.employee)
        );

        alert(`Welcome ${data.employee.name} ✅`);

        navigate("/attendance");
      } else {
        alert("Invalid Employee ID or Password ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🔐 Employee Attendance Portal</h1>

        <input
          type="text"
          placeholder="Employee ID / Admin"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p>
          <b>Admin Login</b>
          <br />
          admin / admin123
          <br />
          <br />
          <b>Employee Login</b>
          <br />
          EMP001 / pass123
          <br />
          EMP002 / pass123
          <br />
          EMP050 / pass123
        </p>
      </div>
    </div>
  );
}

export default Login;