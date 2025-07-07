import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import './HireMe.css'; // Import the CSS file

const HireMe = () => {
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  // Constellation animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= width) this.vx *= -1;
        if (this.y <= 0 || this.y >= height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#4e9af1";
        ctx.fill();
      }
    }

    const connectParticles = () => {
      for (let a = 0; a < particleCount; a++) {
        for (let b = a; b < particleCount; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < 16000) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(78, 154, 241, ${1 - distance / 16000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsLoading(true);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ message: 'Thank you! Your message has been sent.', type: 'success' });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({ 
        message: 'Error sending message. Please email me directly at ak.268rajput@gmail.com', 
        type: 'error' 
      });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hireme-page">
      <canvas 
        ref={canvasRef} 
        className="constellation-canvas"
      />

      <main className="hireme-container">
        <div className="modal-content">
          <h2>Let's Work Together!</h2>
          <p>Fill out the form and I'll respond within 24 hours</p>
          
          <form 
            id="hire-form" 
            onSubmit={handleSubmit}
            action="https://formspree.io/f/movdqwvb" 
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Hire Request" />
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name*" 
              required
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email*" 
              required
            />
            <input 
              type="text" 
              name="project" 
              placeholder="Project Title*" 
              required
            />
            <textarea 
              name="details" 
              placeholder="Project Details*" 
              required
            ></textarea>
            <select name="budget">
              <option value="">Budget Range (Optional)</option>
              <option value="$500-$1000">$50-$100</option>
              <option value="$1000-$5000">$100-$500</option>
              <option value="$500-$1000">$500-$1000</option>
              <option value="$1000-$5000">$1000-$5000</option>
              <option value="$5000+">$5000+</option>
            </select>
            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <FaSpinner className="spinner-icon" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
          
          {formStatus.message && (
            <div className={`form-status ${formStatus.type}`}>
              {formStatus.message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HireMe;