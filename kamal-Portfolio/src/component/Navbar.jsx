import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current path and normalize it
  const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  const handleHireClick = () => {
    navigate('/hire');
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <nav className={styles.navLinks}>
          {['home', 'about', 'services', 'insights', 'projects', 'contact'].map((link) => (
            <Link
              key={link}
              to={`/${link === 'home' ? '' : link}`}
              className={`${styles.navLink} ${path === link ? styles.active : ''}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </nav>
        <button onClick={handleHireClick} className={styles.hireBtn}>
          <span>Hire Me</span>
          <FaArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
