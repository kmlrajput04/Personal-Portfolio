const mongoose = require('mongoose');

const keyInsightSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
}, { _id: false });

const topicSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    min: 1,
    max: 15
  },
  title: {
    type: String,
    required: true
  },
  keyInsights: {
    type: [keyInsightSchema],
    required: true,
    validate: {
      validator: v => Array.isArray(v) && v.length > 0,
      message: 'At least one key insight is required'
    }
  }
}, { _id: false });

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 120
  },
  subtitle: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  topics: {
    type: [topicSchema],
    required: true,
    validate: {
      validator: v => Array.isArray(v) && v.length === 15,
      message: 'Exactly 15 topics are required'
    }
  },
  conclusion: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  slug: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    version: {
      type: Number,
      default: 1
    }
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
blogPostSchema.index({ title: 'text', subtitle: 'text' });
blogPostSchema.index({ 'topics.title': 'text', 'topics.keyInsights.title': 'text' });

// Pre-save hook to update timestamps and generate slug
blogPostSchema.pre('save', function(next) {
  this.meta.updatedAt = Date.now();
  
  if (!this.slug) {
    this.slug = this.title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  }
  
  next();
});

// Virtual for formatted dates
blogPostSchema.virtual('meta.formattedDates').get(function() {
  return {
    createdAt: this.meta.createdAt.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    }),
    updatedAt: this.meta.updatedAt.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    })
  };
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;