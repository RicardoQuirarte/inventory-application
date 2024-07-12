const express = require("express");
const router = express.Router();

// Require controller modules.
const category_controller = require("../controllers/categoyController");
const patient_controller = require("../controllers/patientController");

/// category ROUTES ///

// GET catalog home page.
router.get("/", category_controller.index);

// GET request for creating a category. NOTE This must come before routes that display category (uses id).
router.get("/category/create", category_controller.category_create_get);

// POST request for creating category.
router.post("/category/create", category_controller.category_create_post);

// GET request to delete category.
router.get("/category/:id/delete", category_controller.category_delete_get);

// POST request to delete category.
router.post("/category/:id/delete", category_controller.category_delete_post);

// GET request to update category.
router.get("/category/:id/update", category_controller.category_update_get);

// POST request to update category.
router.post("/category/:id/update", category_controller.category_update_post);

// GET request for one category.
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all category items.
router.get("/categorys", category_controller.category_list);

/// patient ROUTES ///

// GET request for creating patient. NOTE This must come before route for id (i.e. display patient).
router.get("/patient/create", patient_controller.patient_create_get);

// POST request for creating patient.
router.post("/patient/create", patient_controller.patient_create_post);

// GET request to delete patient.
router.get("/patient/:id/delete", patient_controller.patient_delete_get);

// POST request to delete patient.
router.post("/patient/:id/delete", patient_controller.patient_delete_post);

// GET request to update patient.
router.get("/patient/:id/update", patient_controller.patient_update_get);

// POST request to update patient.
router.post("/patient/:id/update", patient_controller.patient_update_post);

// GET request for one patient.
router.get("/patient/:id", patient_controller.patient_detail);

// GET request for list of all patients.
router.get("/patients", patient_controller.patient_list);

module.exports = router;
