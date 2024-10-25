const pool = require("./pool");

async function insertPatient(name, peso, estatura, age, price, category) {
  await pool.query(
    "INSERT INTO patients (name, peso, estatura, age, price, category) VALUES ($1, $2, $3, $4, $5, $6)",
    [name, peso, estatura, age, price, category]
  );
}

async function getAllPatients() {
  const { rows } = await pool.query("SELECT * FROM patients ORDER BY id");
  return rows;
}

async function searchPatient(input) {
  const { rows } = await pool.query("SELECT * FROM patients WHERE id = ($1)", [
    input,
  ]);
  return rows;
}

async function searchPatientByName(input) {
  const { rows } = await pool.query(
    "SELECT * FROM patients WHERE name = ($1)",
    [input]
  );
  return rows;
}

async function updatePatient(name, peso, estatura, age, price, category, id) {
  await pool.query(
    "UPDATE patients SET name = $1, peso = $2, estatura = $3, age = $4, price = $5, category = $6 WHERE id = $7",
    [name, peso, estatura, age, price, category, id]
  );
}

async function deletePatient(algo) {
  await pool.query("DELETE FROM patients WHERE id = ($1)", [algo]);
}

module.exports = {
  getAllPatients,
  insertPatient,
  searchPatient,
  updatePatient,
  deletePatient,
  searchPatientByName,
};
