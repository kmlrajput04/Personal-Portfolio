const { SkillCategory, AICategory } = require("../model/technicalSkill"); 

const getAllSkillCategories = async (req, res) => {
  try {
    const categories = await SkillCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("❌ Error fetching skill categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /skills/ai
const getAISkills = async (req, res) => {
  try {
    const aiSkills = await AICategory.find();
    res.status(200).json(aiSkills);
  } catch (error) {
    console.error("❌ Error fetching AI skills:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllSkillCategories,
  getAISkills
};
