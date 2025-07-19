import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InsightMain.scss';
import AI_Image from "../../assets/Ai in web dev.png"


const InsightMain = ({ filteredInsights }) => {
 const navigate = useNavigate();

  if (filteredInsights.length === 0) {
    return (
      <div className="insight-main no-results">
        <h3>No insights found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    );
  }
const handleArticleClick = (slug) => {
    navigate(`/insights/${slug}`);
  };


  return (
    <div className="insight-main">
      <div className="blog-articles">
        {filteredInsights.map(insight => (
          <article key={insight.slug} className={`blog-article ${insight.isFeatured ? 'featured' : ''}`}>
            <div className="article-image">
              <img   src={insight.image.url ? insight.image.url : AI_Image} 
alt={insight.image.alt} />
              {insight.isFeatured && <span className="featured-badge">Featured</span>}
            </div>
            <div className="article-content">
              <div className="article-meta">
                <span className="article-category">{insight.category}</span>
                <span>{new Date(insight.date).toLocaleDateString()}</span>
                <span>{insight.readingTime} min read</span>
              </div>
              <h3 className="article-title">{insight.title}</h3>
              <p className="article-excerpt">{insight.excerpt}</p>
              <div className="article-footer">
                <div className="article-tags">
                  {insight.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button className="read-more-btn" onClick={() => handleArticleClick(insight.slug)}>
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default InsightMain;