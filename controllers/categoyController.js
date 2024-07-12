const Category = require("../models/category");
const Patient = require("../models/patient");
const asyncHandler = require("express-async-handler");

// Display list of all categorys.
exports.index = asyncHandler(async (req, res, next) => {
  const [numCategorys, numPatients] = await Promise.all([
    Category.countDocuments({}).exec(),
    Patient.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Alain Molina",
    category_count: numCategorys,
    patient_count: numPatients,
  });
});

// Display list of all categorys.
exports.category_list = asyncHandler(async (req, res, next) => {
  const allCategorys = await Category.find({}).sort({ name: 1 }).exec();

  res.render("category_list", {
    title: "Lista de Categorias",
    category_list: allCategorys,
  });
});

// Display detail page for a specific category.
exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category create GET");
});

// // Get details of category and all associated patients (in parallel)
// const [category, patientsInCategory] = await Promise.all([
//   Category.findById(req.params.id).exec(),
//   Patient.find({ category: req.params.id }, "name price").exec(),
// ]);
// if (category === null) {
//   // No results.
//   const err = new Error("category not found");
//   err.status = 404;
//   return next(err);
// }

// res.render("category_detail", {
//   title: "Detalles de la categoria",
//   category: category,
//   category_patients: patientsInCategory,
// });

// Display category create form on GET.
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category create GET");
});

// Handle category create on POST.
exports.category_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category create POST");
});

// Display category delete form on GET.
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category delete GET");
});

// Handle category delete on POST.
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category delete POST");
});

// Display category update form on GET.
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category update GET");
});

// Handle category update on POST.
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category update POST");
});
