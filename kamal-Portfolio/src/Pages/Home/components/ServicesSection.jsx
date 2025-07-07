import React, { useState, useEffect, useRef } from 'react';
import { 
  FaLaptopCode, 
  FaServer, 
  FaCode, 
  FaCloudUploadAlt, 
  FaChartLine, 
  FaChartPie,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLaptopCode className="service-icon" />,
      title: "Frontend Development",
      items: [
        "Custom website development",
        "Responsive UI/UX design",
        "React applications"
      ],
    //   color: "#4e9af1"
    },
    {
      icon: <FaServer className="service-icon" />,
      title: "Backend Development",
      items: [
        "Node.js/Express APIs",
        "Database integration",
        "Authentication systems"
      ],
    //   color: "#6c5ce7"
    },
    {
      icon: <FaCode className="service-icon" />,
      title: "Full-Stack Development",
      items: [
        "End-to-end web apps",
        "API integration",
        "Performance optimization"
      ],
    //   color: "#00b894"
    },
    {
      icon: <FaCloudUploadAlt className="service-icon" />,
      title: "DevOps & Cloud",
      items: [
        "CI/CD Pipelines",
        "Cloud deployment",
        "Docker containerization"
      ],
    //   color: "#fd79a8"
    },
    {
      icon: <FaChartLine className="service-icon" />,
      title: "Tech Consulting",
      items: [
        "Architecture Review",
        "Performance audits",
        "Team training"
      ],
    //   color: "#fdcb6e"
    },
    {
      icon: <FaChartPie className="service-icon" />,
      title: "Ongoing Maintenance",
      items: [
        "Security updates",
        "Bug fixes",
        "Priority support"
      ],
    //   color: "#e17055"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-rotation with pause on hover
  useEffect(() => {
    const autoRotate = () => {
      if (!isHovered) {
        setCurrentIndex(prev => (prev + 1) % services.length);
      }
    };

    intervalRef.current = setInterval(autoRotate, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isHovered, services.length]);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentIndex(prev => (prev + 1) % services.length);
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
    }
  };

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % services.length);
    resetInterval();
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex(prev => (prev + 1) % services.length);
      }
    }, 3000);
  };

  // 3D carousel effect calculations
  const calculatePosition = (index) => {
    const distance = (index - currentIndex) * 100;
    const zIndex = services.length - Math.abs(index - currentIndex);
    const scale = 1 - Math.abs(index - currentIndex) * 0.1;
    const opacity = 1 - Math.abs(index - currentIndex) * 0.3;
    
    return {
      transform: `translateX(${distance}%) scale(${scale})`,
      zIndex,
      opacity: opacity < 0.5 ? 0.5 : opacity,
      filter: `brightness(${scale})`
    };
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h2 className="section-title">Services I Provide</h2>
        <p className="section-subtitle">Comprehensive solutions tailored to your needs</p>
      </div>

      <div 
        className="carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={carouselRef}
      >
        <button className="carousel-button prev" onClick={goToPrev}>
          <FaChevronLeft />
        </button>
        
        <div className="carousel-track">
          {services.map((service, index) => {
            const position = calculatePosition(index);
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={index}
                className={`carousel-item ${isActive ? 'active' : ''}`}
                style={{
                  ...position,
                  '--highlight-color': service.color
                }}
              >
                <div className={`service-icon-wrapper ${isActive ? 'active' : ''}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {isActive && (
                  <div className="active-indicator" style={{ backgroundColor: service.color }} />
                )}
              </div>
            );
          })}
        </div>
        
        <button className="carousel-button next" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-dots">
        {services.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            style={{
              backgroundColor: index === currentIndex ? services[currentIndex].color : '#ccc'
            }}
          />
        ))}
      </div>

      {/* <div className="service-cta">
        <p>Ready to discuss your project?</p>
        <button className="cta-button">Get in Touch</button>
      </div> */}
    </div>
  );
};

export default ServicesSection;