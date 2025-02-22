const express = require('express');
const app = express();
app.use(express.json()); 

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
  

app.delete("/student/:id", (req, res) => {
  const studentId = req.params.id; 
  const index = students.findIndex(s => s.id === studentId);
  
  if (index !== -1) {
    students.splice(index, 1);  
    res.status(200).send('Student deleted successfully');
  } else {
    res.status(404).send('Student not found');
  }
});


app.post("/student", (req, res) => {
  const studentId = req.body.id; 
  const student = students.find(s => s.id === studentId);
  
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

app.post("/students", (req, res) => {
  const newStudent = req.body; 
  students.push(newStudent);
  res.status(201).json(newStudent); 
});

app.listen(2000, () => {
  console.log("Server started on http://localhost:2000");
});
