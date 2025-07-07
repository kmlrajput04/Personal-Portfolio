const express = require("express");
const projectRouter = express.Router();
const upload = require("../middlewares/upload")

const projectController = require("../controller/project");


projectRouter.post("/upload-avatar/:id", upload.array("image"), projectController.uploadAvatar);
projectRouter.post("/createProject", projectController.createProject);
projectRouter.get("/getAllProject",projectController.getAllProjects );

module.exports = projectRouter;
