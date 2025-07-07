const mongoose = require('mongoose');

const insightSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [120, 'Title cannot exceed 120 characters']
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    maxlength: [300, 'Excerpt cannot exceed 300 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Frontend', 'Backend', 'DevOps', 'Career', 'Emerging Tech'],
      message: 'Please select correct category'
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: [String],
    required: [true, 'Please add at least one tag']
  },
  image: {
    url: {
      type: String,
      required: [true, 'Image URL is required']
    },
    alt: {
      type: String,
      required: [true, 'Image alt text is required']
    }
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  slug: {
    type: String,
    unique: true,
    required: [true, 'Slug is required']
  },
  readingTime: {
    type: Number,
    required: [true, 'Reading time is required'],
    min: [1, 'Reading time must be at least 1 minute']
  },
  meta: {
    category: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: true
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});


const Insight = mongoose.model('Insight', insightSchema);

module.exports = Insight;