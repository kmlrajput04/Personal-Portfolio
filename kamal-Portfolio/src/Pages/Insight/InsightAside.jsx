import React, { useState } from 'react';
import './InsightAside.scss';

const InsightAside = ({ insights, onCategoryFilter, onTagFilter, activeCategory, activeTags }) => {
  // Extract unique categories and tags from insights
  const categories = [...new Set(insights.map(insight => insight.category))];
  const allTags = insights.flatMap(insight => insight.tags);
  const tags = [...new Set(allTags)];

  const [selectedTags, setSelectedTags] = useState(activeTags || []);

  const handleTagToggle = (tag) => {
    let newTags;
    if (selectedTags.includes(tag)) {
      newTags = selectedTags.filter(t => t !== tag);
    } else {
      newTags = [...selectedTags, tag];
    }
    setSelectedTags(newTags);
    onTagFilter(newTags);
  };

  return (
    <aside className="insight-aside">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Categories</h3>
        <ul className="category-list">
          <li className={`category-item ${!activeCategory ? 'active' : ''}`} onClick={() => onCategoryFilter(null)}>
            All Categories
          </li>
          {categories.map(category => (
            <li 
              key={category}
              className={`category-item ${activeCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryFilter(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Tags</h3>
        <div className="tag-cloud">
          {tags.map(tag => (
            <span
              key={tag}
              className={`tag ${activeTags.includes(tag) ? 'active' : ''}`}
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default InsightAside;