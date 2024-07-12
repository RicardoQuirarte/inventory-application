const Patient = require("../models/patient");
const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

// Display list of all patients.
exports.patient_list = asyncHandler(async (req, res, next) => {
  const allPatients = await Patient.find({}, "name price")
    .sort({ name: 1 })
    .exec();

  res.render("patient_list", {
    title: "Lista de pacientes",
    patient_list: allPatients,
  });
});

// Display detail page for a specific patient.
exports.patient_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Patient detail: ${req.params.id}`);
});

// Display patient create form on GET.
exports.patient_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Patient create GET");
});

// Handle patient create on POST.
exports.patient_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Patient create POST");
});

// Display patient delete form on GET.
exports.patient_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Patient delete GET");
});

// Handle patient delete on POST.
exports.patient_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Patient delete POST");
});

// Display patient update form on GET.
exports.patient_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Patient update GET");
});

// Handle patient update on POST.
exports.patient_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Patient update POST");
});
