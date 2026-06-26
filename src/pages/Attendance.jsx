import { useState } from "react";

function Attendance() {
  const [message, setMessage] = useState("");

  // Login panna employee details
  const employee = JSON.parse(
    localStorage.getItem("employee")
  );

  const markAttendance = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/attendance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: employee.emp_id,
            name: employee.name,
            department: employee.department,
            time: new Date().toLocaleString("sv-SE", {
  timeZone: "Asia/Kolkata"
})
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("✔ Attendance Marked Successfully");
      } else {
        setMessage("⚠ Failed to save attendance");
      }
    } catch (error) {
      setMessage("⚠ Failed to connect to server");
    }
  };

  return (
    <div className="dashboard">
      <h2>Employee Attendance</h2>

      <div className="card">
        <h3>👤 Employee Details</h3>

        <br />

        <p>
          <b>Employee ID:</b> {employee.emp_id}
        </p>

        <p>
          <b>Name:</b> {employee.name}
        </p>

        <p>
          <b>Department:</b> {employee.department}
        </p>

        <br />

        <button
          className="mark-btn"
          onClick={markAttendance}
        >
          ✅ Mark In Attendance
        </button>

        <button className="markout-btn">
          ❌ Mark Out Attendance
        </button>

        <br />
        <br />

        {message && (
          <p style={{ color: "green" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Attendance;