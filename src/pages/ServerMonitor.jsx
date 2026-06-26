function ServerMonitor() {
  return (
    <div className="dashboard">

      <h2>🖥️ Server Monitoring Dashboard</h2>

      <div className="cards">

        <div className="card">
          <h3>CPU Usage</h3>
          <h1>82%</h1>
        </div>

        <div className="card">
          <h3>RAM Usage</h3>
          <h1>74%</h1>
        </div>

        <div className="card">
          <h3>Disk Usage</h3>
          <h1>68%</h1>
        </div>

        <div className="card">
          <h3>Active Users</h3>
          <h1>22</h1>
        </div>

      </div>

      <div className="card">

        <h3>🚨 Incident Details</h3>

        <p><b>Time:</b> 09:05 AM</p>

        <p>
          <b>Issue:</b>
          Attendance marked successfully but not saved.
        </p>

        <p>
          <b>Root Cause:</b>
          SQL Connection Pool Exhausted
        </p>

        <p style={{ color: "red" }}>
          <b>Status:</b> Critical
        </p>

      </div>

      <div className="card">

        <h3>📄 Error Logs</h3>

   <pre>
[09:00:12] Database Timeout
[09:01:20] Connection Pool Full
[09:03:55] Attendance Insert Failed
[09:05:10] API Response Sent Successfully
</pre>

      </div>

    </div>
  );
}

export default ServerMonitor;