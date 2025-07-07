const VITE_INSIGHT_BLOG_6 = import.meta.env.VITE_INSIGHT_API_BLOG6;

const getBlog6Data = async () => {
    try {
        const response = await fetch(VITE_INSIGHT_BLOG_6);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export default getBlog6Data;