const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const projectRouter = require("./router/project")
const technicalRouter = require("./router/technicalSkill")
const testimonialRouter = require("./router/testimonialRouter")
const insightRouter = require("./router/insight") 
const insight6Router = require("./router/insight6")
const path = require("path");
// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Static path for project image
app.use('/assets/images', express.static(path.join(__dirname, 'assets', 'images')));

// MongoDB connection
mongoose
  .connect(process.env.DATABASE_URL, {
    
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/project", projectRouter)
app.use("/skill", technicalRouter)
app.use("/testimonial", testimonialRouter)
app.use("/insight", insightRouter)
app.use("/insight6", insight6Router)

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
