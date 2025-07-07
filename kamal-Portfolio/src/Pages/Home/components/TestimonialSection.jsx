import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './TestimonialSection.css';
import getTestimonial from "../../../assets/database/testimonial"; // Assumes this is an async function

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonial();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err.message);
        setError("Failed to load testimonials. Please try again later.");
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star-icon" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star-icon" />);
    }

    return stars;
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Clients Say</h2>
        </div>

        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial._id || testimonial.id} className="testimonial-card">
                <div className="quote-icon">“</div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <span className="client-role">{testimonial.role}</span>
                  <div className="client-rating">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
