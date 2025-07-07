const Insight = require("../model/insight");

const createInsight = async (req, res) => {
  try {
    const {
      title,
      excerpt,
      category,
      tags,
      imageUrl,
      imageAlt,
      isFeatured,
      content,
      readingTime
    } = req.body;

    const newInsight = new Insight({
      title,
      excerpt,
      category,
      tags: JSON.parse(tags), // Assuming tags comes as JSON string
      image: {
        url: imageUrl,
        alt: imageAlt
      },
      isFeatured: isFeatured || false,
      content,
      readingTime,
      slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      meta: {
        category: category.toLowerCase(),
        tags: JSON.parse(tags).map(tag => tag.toLowerCase())
      }
    });

    await newInsight.save();
    res.status(201).json({ 
      message: "Insight created successfully", 
      insight: newInsight 
    });
  } catch (error) {
    console.error("Error creating insight:", error);
    res.status(500).json({ 
      message: "Internal server error",
      error: error.message 
    });
  }
};

const getAllInsights = async (req, res) => {
  try {
    const insights = await Insight.find();
    res.status(200).json(insights);
  } catch (error) {
    console.error("❌ Error fetching insights:", error);
    res.status(500).json({ 
      message: "Server error while fetching insights",
      error: error.message 
    });
  }
};

module.exports = {
  createInsight,
  getAllInsights
};