import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p className={styles.footerTagline}>Turning Ideas Into Digital Reality</p>
          <p className={styles.footerCredit}>
            Crafted with <span className={styles.heart}>♥</span> by Kamal Rajput
          </p>
        </div>

        <div className={styles.scrollTop} onClick={scrollToTop}>
          <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;