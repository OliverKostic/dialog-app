import React from 'react';
import styles from './Modal.module.scss';

interface FooterProps {
  buttons?: React.ReactNode[];
}

const Footer: React.FC<FooterProps> = ({ buttons }) => {
  return (
    <div className={styles.footer}>
      {buttons?.map((button, index) => (
        <span key={index}>{button}</span>
      ))}
    </div>
  );
};

export default Footer;
