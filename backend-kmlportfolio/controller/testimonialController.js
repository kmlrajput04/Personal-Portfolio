// controllers/testimonialController.js
const Testimonial = require("../model/Testimonial");


const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials", error });
  }
};

const createTestimonial = async (req, res) => {
  try {
    const { quote, name, role, rating } = req.body;
    const newTestimonial = new Testimonial({ quote, name, role, rating });
    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial created successfully", testimonial: newTestimonial });
  } catch (error) {
    res.status(500).json({ message: "Error creating testimonial", error });
  }
};

module.exports = { getAllTestimonials, createTestimonial };