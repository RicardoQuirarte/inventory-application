const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.showIndex);
usersRouter.get("/create", usersController.createPatientGet);
usersRouter.post("/create", usersController.createPatientPost);
usersRouter.get("/patients", usersController.getPatients);
usersRouter.get("/patient", usersController.searchPatient);
usersRouter.get("/search", usersController.showPatient);
usersRouter.get("/serchbyname", usersController.searchByName);
usersRouter.get("/update", usersController.updatePatient);
usersRouter.put("/update", usersController.updatePatientPost);
usersRouter.delete("/delete", usersController.deletePatient);

module.exports = usersRouter;
