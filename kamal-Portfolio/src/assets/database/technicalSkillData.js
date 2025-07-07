const TECHNICAL_SKILLS_API = import.meta.env.VITE_TECHNICAL_SKILLS_API;
const AI_SKILLS_API = import.meta.env.VITE_AI_SKILLS_API;

const getTechnicalSkills = async () => {
  try {
    const res = await fetch(TECHNICAL_SKILLS_API);
    if (!res.ok) throw new Error("Failed to fetch technical skills");
    return await res.json();
  } catch (error) {
    console.error("❌ Error fetching technical skills:", error);
    return [];
  }
};

const getAISkills = async () => {
  try {
    const res = await fetch(AI_SKILLS_API);
    if (!res.ok) throw new Error("Failed to fetch AI skills");
    return await res.json();
  } catch (error) {
    console.error("❌ Error fetching AI skills:", error);
    return [];
  }
};

export { getTechnicalSkills, getAISkills };
