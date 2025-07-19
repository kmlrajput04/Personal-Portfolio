import React, { useEffect, useRef, useState } from 'react';

import './InsightSection.scss';
import AI_Image from '../../../assets/Ai in web dev.png';
import getInsights from '../../../assets/database/insightData';

const InsightSection = () => {
  const sectionRef = useRef(null);
  const [allInsights, setAllInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch insights from API
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await getInsights();
        setAllInsights(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  // Select only 3 specific insights to display
  const getFeaturedInsights = () => {
    // Customize these indexes to show the insights you want
    // Example: show first, third and fifth insights
    const featuredIndexes = [0, 2, 4]; // Change these indexes as per your preference
    
    // Filter out indexes that might be out of bounds
    return featuredIndexes
      .filter(index => index < allInsights.length)
      .map(index => allInsights[index]);
  };

  // Animation and event effects
  useEffect(() => {
    const insights = getFeaturedInsights();
    if (insights.length === 0) return;

    const insightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.insight-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.animation = `cardEntrance 0.8s ease-out ${index * 0.1}s forwards`;
            }, 50);
          });
          insightObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) insightObserver.observe(sectionRef.current);

    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)';
        const img = card.querySelector('.insight-image img');
        if (img) img.style.transition = 'transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)';
      });
    });

    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.add('clicked');
        setTimeout(() => {
          button.classList.remove('clicked');
          console.log('Navigating to:', button.parentElement.querySelector('h3').textContent);
        }, 300);
      });
    });



    return () => {
      if (sectionRef.current) insightObserver.unobserve(sectionRef.current);
      insightCards.forEach(card => card.removeEventListener('mouseenter', () => {}));
      readMoreButtons.forEach(button => button.removeEventListener('click', () => {}));
    };
  }, [allInsights]); // Run this effect when allInsights changes

  if (loading) {
    return (
      <section className="insight-section loading" ref={sectionRef}>
        <div className="section-header">
          <h2 className="section-title">My Latest Insights</h2>
          <p className="section-subtitle">Loading insights...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="insight-section error" ref={sectionRef}>
        <div className="section-header">
          <h2 className="section-title">My Latest Insights</h2>
          <p className="section-subtitle">Error loading insights: {error}</p>
        </div>
      </section>
    );
  }

  const featuredInsights = getFeaturedInsights();

  return (
    <section className="insight-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">My Latest Insights</h2>
        <p className="section-subtitle">Sharing knowledge about web development, AI, and modern tech</p>
      </div>

      <div className="insight-container">
        {featuredInsights.map((insight, index) => (
          <article className="insight-card" key={insight._id || index}>
            <div className="insight-content">
              <h3 className="insight-title">{insight.title}</h3>
              <p className="insight-excerpt">{insight.excerpt}</p>
              <button className="read-more">Read More <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="insight-image">   
              <img
                src={insight.image.url ? insight.image.url : AI_Image} 
                alt={insight.image?.alt || insight.alt || insight.title} 
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InsightSection;