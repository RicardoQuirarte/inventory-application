const db = require("../db/queries");

async function showIndex(req, res) {
  res.render("index", {
    title: "Molina nutricion",
  });
}

async function createPatientGet(req, res) {
  res.render("createPatient", {
    title: "New patient",
  });
}

async function createPatientPost(req, res) {
  const { name, peso, estatura, age, price, category } = req.body;
  await db.insertPatient(name, peso, estatura, age, price, category);
  res.redirect("/patients");
}

async function getPatients(req, res) {
  const patients = await db.getAllPatients();
  res.render("allPatients", {
    title: "List of all the patients",
    patients: patients,
  });
}

async function searchPatient(req, res) {
  res.render("searchPatient", {
    title: "Search for a patient",
  });
}

async function searchByName(req, res) {
  const { name } = req.query;
  const user = await db.searchPatientByName(name);
  res.render("patient", { title: "Paciente", user: user });
}

async function showPatient(req, res) {
  const { id } = req.query;
  const user = await db.searchPatient(id);
  res.render("patient", {
    title: "Paciente:",
    user: user,
  });
}

async function updatePatient(req, res) {
  const { id } = req.query;
  const [user] = await db.searchPatient(id);
  res.render("updatePatient", {
    title: "Update patient",
    user: user,
  });
}

async function updatePatientPost(req, res) {
  const { name, peso, estatura, age, price, category, id } = req.body;
  await db.updatePatient(name, peso, estatura, age, price, category, id);
  res.redirect("/patients");
}

async function deletePatient(req, res) {
  const { id } = req.query;
  await db.deletePatient(id);
  res.redirect("/patients");
}

module.exports = {
  showIndex,
  createPatientGet,
  createPatientPost,
  getPatients,
  searchPatient,
  showPatient,
  updatePatient,
  updatePatientPost,
  deletePatient,
  searchByName,
};
