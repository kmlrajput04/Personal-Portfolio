const TESTIMONIAL_API = import.meta.env.VITE_TESTIMONIAL_API;

const getTestimonial = async () => {
  try {
    const res = await fetch(TESTIMONIAL_API);
    if (!res.ok) throw new Error("Failed to fetch testimonials");
    return await res.json();
  } catch (error) {
    console.error("❌ Error fetching testimonials:", error.message);
    return [];
  }
};

export default getTestimonial;
