const axios = require('axios');

// Sample insights data formatted for your API
const insights = [
  {
    title: "Building High-Performance Backends with Node.js",
    excerpt: "Node.js powers some of the fastest backends, but performance bottlenecks can still occur. Learn advanced techniques like connection pooling, caching strategies, database optimization, and load balancing to build scalable and efficient APIs...",
    category: "Backend",
    tags: ["NodeJS", "Databases", "Scalability"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Backend Architecture",
    isFeatured: false,
    content: "Full article content would go here...",
    readingTime: 14
  },
  {
    title: "From Junior to Senior: Navigating Web Development Career Growth",
    excerpt: "Climbing the ladder in web development isn't just about coding skills. This guide covers mentorship, specialization paths, negotiation strategies, and how to transition from a junior developer to a tech lead or architect...",
    category: "Career",
    tags: ["WebDev", "SoftSkills", "Jobs"],
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Career Growth in Tech",
    isFeatured: true,
    content: "Full article content would go here...",
    readingTime: 12
  },
  {
    title: "Mastering React Performance",
    excerpt: "Learn advanced techniques to optimize your React applications for blazing fast performance...",
    category: "Frontend",
    tags: ["React", "Performance", "Optimization", "JavaScript", "Typescript"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "React Performance",
    isFeatured: false,
    content: "Full article content would go here...",
    readingTime: 10
  },
  {
    title: "AI in Web Development",
    excerpt: "How artificial intelligence is revolutionizing the way we build and maintain web applications...",
    category: "Emerging Tech",
    tags: ["AI", "Web Development", "Machine Learning", "Deep Learning"],
    imageUrl: "https://example.com/path-to-ai-image.jpg",
    imageAlt: "AI in Web Dev",
    isFeatured: true,
    content: "Full article content would go here...",
    readingTime: 15
  },
  {
    title: "DevOps Best Practices",
    excerpt: "Streamline your deployment pipeline with these essential DevOps strategies for web developers...",
    category: "DevOps",
    tags: ["DevOps", "Continuous Integration", "Continuous Delivery", "Automation", "Infrastructure as Code"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "DevOps",
    isFeatured: false,
    content: "Full article content would go here...",
    readingTime: 12
  },
  {
    title: "CSS Grid Revolution",
    excerpt: "Why CSS Grid is changing the way we think about web layouts and how to leverage its power...",
    category: "Frontend",
    tags: ["CSS", "Grid", "Layout", "Responsive Design", "Media Queries"],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "CSS Grid",
    isFeatured: false,
    content: "Full article content would go here...",
    readingTime: 8
  }
];

const API_ENDPOINT = 'http://localhost:4123/insight/createInsight';

async function insertInsights() {
  try {
    for (const insight of insights) {
      // Convert tags array to JSON string if your API expects it
      const payload = {
        ...insight,
        tags: JSON.stringify(insight.tags) // Only include if your API expects stringified JSON
      };
      
      const response = await axios.post(API_ENDPOINT, payload);
      console.log(`Inserted: ${insight.title}`, response.data);
    }
    console.log('✅ All insights inserted successfully');
  } catch (error) {
    console.error('❌ Error inserting insights:', 
      error.response?.data || error.message || error);
  }
}

insertInsights();