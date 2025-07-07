const express = require("express");
const testimonialRouter = express.Router();
const testimonialController = require("../controller/testimonialController");

// GET /api/testimonials - fetch all testimonials
testimonialRouter.get("/getAllTestimonials", testimonialController.getAllTestimonials);

// POST /api/testimonials - create a new testimonial
testimonialRouter.post("/createTestimonial", testimonialController.createTestimonial);

module.exports = testimonialRouter;