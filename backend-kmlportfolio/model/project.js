const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // like "ecommerce", "taskmanager"
  title: { type: String, required: true },
  description: { type: String, required: true },
  detailedDescription: { type: String },
  features: [{ type: String }],
  technical: { type: String },
  techStack: [{ type: String }],
  githubUrl: { type: String },
  images: [{ type: String }]
}, {
  timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
