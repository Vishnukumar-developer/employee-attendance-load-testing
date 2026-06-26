const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishnu@2701",
  database: "employee_attendance",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("MySQL Connected Successfully ✅");
  }
});

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Working Successfully 🚀");
});

// Login API
app.post("/login", (req, res) => {
  const { emp_id, password } = req.body;

  const sql =
    "SELECT * FROM employees WHERE emp_id = ? AND password = ?";

  db.query(sql, [emp_id, password], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length > 0) {
      res.json({
        success: true,
        employee: result[0],
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Employee ID or Password",
      });
    }
  });
});

// Attendance API
app.post("/api/attendance", (req, res) => {
  const { id, name, department, time } = req.body;

  const sql =
    "INSERT INTO attendance (emp_id, name, department, attendance_time) VALUES (?, ?, ?, ?)";

  db.query(sql, [id, name, department, time], (err, result) => {
    if (err) {
      console.log(err);

      return res.json({
        success: false,
        message: "Database Error",
      });
    }

    console.log("Attendance Saved:", result);

    res.json({
      success: true,
      message: "Attendance saved successfully",
    });
  });
});

// History API
app.get("/api/history/:emp_id", (req, res) => {
  const { emp_id } = req.params;

  const sql = `
    SELECT *
    FROM attendance
    WHERE emp_id = ?
    ORDER BY attendance_time DESC
  `;

  db.query(sql, [emp_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);
  });
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});