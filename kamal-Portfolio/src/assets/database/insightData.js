const INSIGHT_API = import.meta.env.VITE_INSIGHT_API;

const getInsights = async () => {
  try {
    const res = await fetch(INSIGHT_API);
    if (!res.ok) throw new Error("Failed to fetch insights");
    return await res.json();
  } catch (error) {
    console.log("❌ Error fetching insights:", error.message);
    return []; // Return empty array on error
  }
};

export default getInsights;