function Admin() {
  return (
    <div className="dashboard">

      <h2>Admin Dashboard</h2>

      <div className="cards">

        <div className="card">
          <h3>👥 Employees</h3>
          <p>50</p>
        </div>

        <div className="card">
          <h3>🟢 Present Today</h3>
          <p>18</p>
        </div>

        <div className="card">
          <h3>❌ Failed Records</h3>
          <p className="status-red">3</p>
        </div>

        <div className="card">
          <h3>⚠ Open Incidents</h3>
          <p>1</p>
        </div>

      </div>

      <br />

      <div className="card">
        <h3>📋 Employee Management</h3>

        <br />

        <p>EMP001 - Vishnu Kumar - IT Infrastructure</p>
        <p>EMP002 - Arun Kumar - Production Support</p>
        <p>EMP003 - Priya - Human Resources</p>
        <p>EMP004 - Karthik - Logistics</p>
      </div>

    </div>
  );
}

export default Admin;