const PROJECT_API_URL = import.meta.env.VITE_PROJECT_API_URL;
const getProjectsData = async () => {
  try {
    const response = await fetch(PROJECT_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const projectsArray = await response.json();

    // Convert array of projects to an object using `key` as the property name
    const projectsData = {};
    projectsArray.forEach((project) => {
      if (project.key) {
        projectsData[project.key] = project;
      }
    });

    return projectsData;
  } catch (error) {
    console.error("❌ Error loading project data:", error);
    return {};
  }
};

export default getProjectsData;
