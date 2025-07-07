const express = require("express");
const technicalRouter = express.Router();
const technicalSkill = require("../controller/technicalSkill");

// GET technical skills
technicalRouter.get("/technical", technicalSkill.getAllSkillCategories);

// GET AI skills
technicalRouter.get("/ai",technicalSkill.getAISkills);

module.exports = technicalRouter;
