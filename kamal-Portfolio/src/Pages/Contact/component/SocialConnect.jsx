import { useEffect, useRef } from 'react';
import './SocialConnect.scss';

const SocialConnect = () => {
  const socialCardsRef = useRef(null);

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const socialCards = socialCardsRef.current?.children;
    
    if (socialCards) {
      Array.from(socialCards).forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        
        const arrow = card.querySelector('.social-arrow');
        card.addEventListener('mouseenter', () => {
          arrow.style.transform = 'translateX(5px)';
          arrow.style.color = '#ffffff';
        });
        
        card.addEventListener('mouseleave', () => {
          arrow.style.transform = '';
          arrow.style.color = 'var(--gray)';
        });
      });
    }

    return () => {
      if (socialCards) {
        Array.from(socialCards).forEach(card => {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        });
      }
    };
  }, []);

  return (
    <section className="social-connect">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect With Me</h2>
          <p className="section-subtitle">Follow my journey and see my latest work</p>
        </div>
        
        <div className="social-grid" ref={socialCardsRef}>
          <div 
            className="social-card linkedin" 
            onClick={() => handleSocialClick('https://www.linkedin.com/in/kamalrajput04/')}
          >
            <div className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="social-content">
              <h3>LinkedIn</h3>
              <p>Professional network</p>
            </div>
            <div className="social-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div 
            className="social-card github" 
            onClick={() => handleSocialClick('https://github.com/kmlrajput04')}
          >
            <div className="social-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="social-content">
              <h3>GitHub</h3>
              <p>Code repositories</p>
            </div>
            <div className="social-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div 
            className="social-card instagram" 
            onClick={() => handleSocialClick('https://www.instagram.com/rajput.kml.04/')}
          >
            <div className="social-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-content">
              <h3>Instagram</h3>
              <p>Personal journey</p>
            </div>
            <div className="social-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div 
            className="social-card whatsapp" 
            onClick={() => handleSocialClick('https://wa.me/919872090704')}
          >
            <div className="social-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="social-content">
              <h3>WhatsApp</h3>
              <p>Quick chat</p>
            </div>
            <div className="social-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;