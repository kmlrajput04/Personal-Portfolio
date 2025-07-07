import { useEffect, useRef } from 'react';
import './ContactMethods.scss';

const ContactMethods = () => {
  const contactCardsRef = useRef(null);

  const handleEmailClick = () => {
    window.location.href = 'mailto:ak.268rajput@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919872090704';
  };

  const handleMapClick = () => {
    window.open(
      'https://maps.google.com/?q=Sector+119,+Balongi,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055',
      '_blank',
      'noopener,noreferrer'
    );
  };

  useEffect(() => {
    const contactCards = contactCardsRef.current?.children;
    
    if (contactCards) {
      Array.from(contactCards).forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        const icon = card.querySelector('.contact-icon');
        card.addEventListener('mouseenter', () => {
          icon.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', () => {
          icon.style.transform = '';
        });
      });
    }

    return () => {
      if (contactCards) {
        Array.from(contactCards).forEach(card => {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        });
      }
    };
  }, []);

  return (
    <section id="contact-methods" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How To Reach Me</h2>
          <p className="section-subtitle">Choose your preferred method to get in touch</p>
        </div>

        <div className="contact-methods" ref={contactCardsRef}>
          <div className="contact-card" onClick={handleEmailClick}>
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p className="contact-info">For project inquiries and collaborations</p>
            <div className="contact-link">
              ak.268rajput@gmail.com
            </div>
          </div>

          <div className="contact-card" onClick={handlePhoneClick}>
            <div className="contact-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Phone</h3>
            <p className="contact-info">Available for calls and WhatsApp messages</p>
            <div className="contact-link">
              +91 9872090704
            </div>
          </div>

          <div className="contact-card" onClick={handleMapClick}>
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <p className="contact-info address">
              Sector 119, Balongi<br />
              Sahibzada Ajit Singh Nagar<br />
              Punjab 160055
            </p>
            <div className="contact-link">
              <i className="fas fa-directions"></i> Get Directions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;