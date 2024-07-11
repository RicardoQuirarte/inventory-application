#! /usr/bin/env node

console.log(
  'This script populates some patients to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category");
const Patient = require("./models/patient");

const categorys = [];
const patients = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategorys();
  await createPatients();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, mesotipo, description) {
  const categorydetail = {
    mesotipo: mesotipo,
    description: description,
  };

  const category = new Category(categorydetail);
  await category.save();
  categorys[index] = category;
  console.log(`Added category: ${mesotipo}`);
}

async function patientCreate(
  index,
  name,
  category,
  price,
  age,
  height,
  weight
) {
  const patientdetail = {
    name: name,
    category: category,
    price: price,
    age: age,
    height: height,
    weight: weight,
  };

  const patient = new Patient(patientdetail);

  await patient.save();
  patients[index] = patient;
  console.log(`Added patient: ${name}`);
}

async function createCategorys() {
  console.log("Adding categorys");
  await Promise.all([
    categoryCreate(
      0,
      "Ectomorfo",
      "Son personas con extremidades largas y bajo peso, con estructura ósea delgada, les cuesta aumentar masa corporal y muscular a pesar de comer lo que sea."
    ),
    categoryCreate(
      1,
      "Mesomorfo",
      "Es el tipo de cuerpo más agraciado genéticamente, en esta sociedad, ya que no acumula grasa y mantiene masa muscular a pesar de hacer poco ejercicio o ser inconstante."
    ),
    categoryCreate(
      2,
      "Endomorfo",
      "Tienden a acumular grasa corporal fácilmente, mantener el peso o bajar unos kilos es un gran reto para las personas endomorfas, lo que buscan generalmente es quemar grasa, pero la ventaja es que ganan masa muscular con facilidad bajo una buena rutina de entrenamiento."
    ),
  ]);
}

async function createPatients() {
  console.log("Adding patients");
  await Promise.all([
    patientCreate(0, "Ricardo Quirarte", categorys[0], 300, 32, 1.7, 70),
    patientCreate(1, "Patricia Huerta", categorys[2], 200, 61, 1.55, 63.5),
    patientCreate(2, "Silvia Valencia", categorys[1], 600, 30, 1.57, 57),
    patientCreate(3, "Simon Grayeb", categorys[2], 400, 1.8, 29, 103),
    patientCreate(4, "Santiago Antonio", categorys[0], 700, 10, 1.5, 40),
    patientCreate(4, "Daryan Camacho", categorys[1], 500, 23, 1.56, 55),
  ]);
}
