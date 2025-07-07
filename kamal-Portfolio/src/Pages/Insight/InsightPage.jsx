import React, { useState, useEffect } from 'react';
import getInsights from '../../assets/database/insightData';
import InsightSearch from './InsightSerach';
import InsightAside from './InsightAside';
import InsightMain from './InsightMain';
import './InsightPage.scss';

const InsightPage = () => {
  const [insights, setInsights] = useState([]);
  const [filteredInsights, setFilteredInsights] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    // Fetch insights data
    const fetchInsights = async () => {
      const data = await getInsights();
      setInsights(data);
      setFilteredInsights(data);
    };
    fetchInsights();
  }, []);

  useEffect(() => {
    // Apply all filters whenever any filter changes
    let results = insights;

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        insight =>
          insight.title.toLowerCase().includes(term) ||
          insight.excerpt.toLowerCase().includes(term) ||
          insight.content.toLowerCase().includes(term) ||
          insight.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Apply category filter
    if (activeCategory) {
      results = results.filter(insight => insight.category === activeCategory);
    }

    // Apply tag filter
    if (activeTags.length > 0) {
      results = results.filter(insight =>
        activeTags.every(tag => insight.tags.includes(tag))
      );
    }

    setFilteredInsights(results);
  }, [insights, searchTerm, activeCategory, activeTags]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  const handleTagFilter = (tags) => {
    setActiveTags(tags);
  };

  return (
    <div className="insight-page">
      <div className="container">
        <div className="insight-header">
          <h1>Developer Insights</h1>
          <p>Discover the latest trends, tips, and best practices in software development</p>
        </div>
        
        <InsightSearch onSearch={handleSearch} />
        
        <div className="insight-layout">
          <div className="aside-column">
            <InsightAside
              insights={insights}
              onCategoryFilter={handleCategoryFilter}
              onTagFilter={handleTagFilter}
              activeCategory={activeCategory}
              activeTags={activeTags}
            />
          </div>
          <div className="main-column">
            <InsightMain filteredInsights={filteredInsights} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightPage;