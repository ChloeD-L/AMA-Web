// components/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>AMA</div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#chinese">中文</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
