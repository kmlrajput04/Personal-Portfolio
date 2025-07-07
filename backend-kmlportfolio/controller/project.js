const Project = require("../model/project");


const createProject = async (req, res) => {
  try {
    const {
      key,
      title,
      description,
      detailedDescription,
      features,
      technical,
      techStack,
      githubUrl
    } = req.body;


    const newProject = new Project({
      key,
      title,
      description,
      detailedDescription,
      features: JSON.parse(features),
      technical,
      techStack: JSON.parse(techStack),
      githubUrl,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const uploadAvatar = async (req, res) => {
  const userId = req.params.id;

  try {
    const project = await Project.findById(userId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Construct full image URLs
    const imageUrls = req.files.map((file) => {
      return `/images/${file.filename}`; // This will work for both dev and production
    });

    // Save to MongoDB (append to existing images)
    project.images = [...project.images, ...imageUrls];
    await project.save();

    res.json({ 
      message: "Images uploaded successfully",
      images: project.images // Returns array of full paths like ["/images/photo1.jpg"]
    });
  } catch (error) {
    console.error("Error uploading avatar image:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// GET all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    res.status(500).json({ message: "Server error while fetching projects" });
  }
};

module.exports = {createProject,uploadAvatar, getAllProjects};
