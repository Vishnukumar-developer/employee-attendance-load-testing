function Dashboard() {
  return (
    <div className="dashboard">

      <h2>Attendance Dashboard</h2>

      <div className="cards">

        <div className="card">
          <h3>👥 Total Employees</h3>
          <p>50</p>
        </div>

        <div className="card">
          <h3>🟢 Active Users</h3>
          <p>18</p>
        </div>

        <div className="card">
          <h3>❌ Failed Attendance</h3>
          <p className="status-red">3</p>
        </div>

        <div className="card">
          <h3>🖥️ Server Health</h3>
          <p className="status-green">Healthy</p>
        </div>

      </div>

      <br />
      <br />

      <div className="card">
        <h3>📋 Incident Summary</h3>

        <p style={{ fontSize: "16px", marginTop: "15px" }}>
          Time: <b>09:05 AM</b>
        </p>

        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          Issue: <b>Attendance marked successfully but not saved in database.</b>
        </p>

        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          Root Cause: <b>SQL Server Connection Pool Exhausted</b>
        </p>

        <p
          style={{
            color: "orange",
            fontSize: "16px",
            marginTop: "10px"
          }}
        >
          Status: Investigating 🟠
        </p>
      </div>

    </div>
  );
}

export default Dashboard;