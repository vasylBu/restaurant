import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin,FaTwitter } from 'react-icons/fa';

import styles from './Footer.module.css';



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 data-cy='title'>House Staff</h3> 
          <p>12345 вулиця, Київ, Україна</p>
          <p>Телефон: +380 44 123 4567</p>
          <p>Email: info@housestaff.com</p>
        </div>
        <div className={styles.socials}>
          <p>Слідкуйте за нами:</p>
          <div className={styles.icons}>
            <FaFacebook className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaLinkedin className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} House Staff. Усі права захищені.
      </div>
    </footer>
  );
}
