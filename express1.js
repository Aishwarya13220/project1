const express = require('express');
const app = express();

let students = [
  {"id": "1", "name": "raj", "branch": "IT"},
  {"id": "2", "name": "ram", "branch": "CSE"},
  {"id": "3", "name": "ravi", "branch": "ECE"}
];


app.get("/students", (req, res) => {
  res.json(students);
});


app.get("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const student = students.find(s => s.id === studentId);
  
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});


app.listen(2000, () => {
  console.log("Server started on http://localhost:2000");
});
