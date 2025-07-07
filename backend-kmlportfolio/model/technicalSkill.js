const mongoose = require("mongoose");

// Tool schema (optional but structured)
const toolSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { _id: false });

// Skill item schema
const skillItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  tools: [toolSchema]  // or simply [String] if you don't need nested structure
}, { _id: false });

// Skill category schema
const skillCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, default: "" },
  skills: [skillItemSchema]
}, { timestamps: true });

// AI category schema
const aiCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, default: "" },
  items: [{ type: String }]
}, { timestamps: true });

// Create models
const AICategory = mongoose.model("AICategory", aiCategorySchema);
const SkillCategory = mongoose.model("SkillCategory", skillCategorySchema);

// ✅ Export both
module.exports = {
  AICategory,
  SkillCategory
};
