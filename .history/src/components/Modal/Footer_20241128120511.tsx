import React from 'react';
import styles from './Modal.module.scss';

interface FooterProps {
  buttons?: React.ReactNode[];
  description?: string; // Optional descriptive text in the footer
}

const Footer: React.FC<FooterProps> = ({ buttons, description }) => {
  return (
    <div className={styles.footer}>
      {description && <p className={styles.description}>{description}</p>} {/* Additional text */}
      <div className={styles.buttons}>
        {buttons?.map((button, index) => (
          <span key={index}>{button}</span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
