const express = require("express"); 
const insightRouter = express.Router();
const insightController = require("../controller/insight"); 


insightRouter.post("/createInsight", insightController.createInsight);
insightRouter.get("/getAllInsights",insightController.getAllInsights ); 

module.exports = insightRouter;