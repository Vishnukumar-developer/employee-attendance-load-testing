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

app.get("/", (req, res) => {
  res.send("Backend Working Successfully 🚀");
});

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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});