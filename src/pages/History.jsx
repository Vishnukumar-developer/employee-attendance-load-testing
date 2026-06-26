function History() {
  return (
    <div className="dashboard">

      <h2>Attendance History</h2>

      <div className="card">

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left"
          }}
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>25-06-2026</td>
              <td>EMP001</td>
              <td>Vishnu Kumar</td>
              <td>08:45 AM</td>
              <td>06:10 PM</td>
              <td style={{ color: "green" }}>Present</td>
            </tr>

            <tr>
              <td>24-06-2026</td>
              <td>EMP001</td>
              <td>Vishnu Kumar</td>
              <td>08:50 AM</td>
              <td>06:00 PM</td>
              <td style={{ color: "green" }}>Present</td>
            </tr>

            <tr>
              <td>23-06-2026</td>
              <td>EMP001</td>
              <td>Vishnu Kumar</td>
              <td>09:05 AM</td>
              <td>--</td>
              <td style={{ color: "red" }}>
                Failed (DB Issue)
              </td>
            </tr>
          </tbody> 

        </table>

      </div>

    </div>
  );
}

export default History;