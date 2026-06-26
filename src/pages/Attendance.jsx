import { useState } from "react";

function Attendance() {
  const [message, setMessage] = useState("");

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
            id: "EMP001",
            name: "Vishnu Kumar",
            department: "IT Infrastructure",
            time: new Date().toISOString().slice(0, 19).replace("T", " "),
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("✔ Attendance Marked Successfully");
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

        <p><b>Employee ID:</b> EMP001</p>
        <p><b>Name:</b> Vishnu Kumar</p>
        <p><b>Department:</b> IT Infrastructure</p>

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