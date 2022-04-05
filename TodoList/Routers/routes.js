const express = require("express");
const Student = require("../Models/models");
const Class = require("../Models/class")
const ClassOfIt = require("../Models/class");
const ControllerStudents = require('../Controllers/students')
const ControllerAccounts = require('../Controllers/account')
const ControllerSongs = require('../Controllers/music')
const ControllerClass = require('../Controllers/class')

const app = express();



//USERS
app.post("/createAccount", ControllerAccounts.createAccount);
app.post("/login", ControllerAccounts.login)
//SONGS
app.post("/createSong", ControllerSongs.createMusic)
//STUDENTS
app.post("/add-student", ControllerStudents.createStudent);
app.put("/update-student/:id", ControllerStudents.updateStudent);
app.get("/all-student", async (request, response) => {
  const users = await Student.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
//CLASS
app.post("/add-class", ControllerClass.createClass);
app.get("/all-class", async (request, response) => {

  const Aclass = await ClassOfIt.find({})
    .populate({
      path: 'student',
      select: { name: 1, faculty: 1, _id: 1 },
    });
  try {
    response.send(Aclass);
  } catch (error) {
    response.status(500).send(error);
  }
});




app.get('/student-by-name/', async (request, response) => {
  const name_student = request.body.name;
  console.log(name_student);
  const users = await Student.find({ name: name_student });
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete('/delete-student/:id', async (request, response) => {
  // const id = request.body.id
  const users = await Student.findByIdAndDelete(request.params.id);
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;