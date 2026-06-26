import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const employee = JSON.parse(
      localStorage.getItem("employee")
    );

    fetch(
      `http://localhost:5000/api/history/${employee.emp_id}`
    )
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.log(err));

  }, []);

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
              <th>Department</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {history.map((item) => (
              <tr key={item.id}>

                <td>
                  {new Date(
                    item.attendance_time
                  ).toLocaleDateString()}
                </td>

                <td>{item.emp_id}</td>

                <td>{item.name}</td>

                <td>{item.department}</td>

                <td>
                  {new Date(
                    item.attendance_time
                  ).toLocaleTimeString()}
                </td>

                <td style={{ color: "green" }}>
                  Present
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default History;