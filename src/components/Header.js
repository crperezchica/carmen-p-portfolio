import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/css/Navigation.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  );
}
