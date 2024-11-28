import React from 'react';
import ButtonGroup from './ButtonGroup';
import styles from './Modal.module.scss';

interface FooterProps {
  buttons?: React.ReactNode[];
  description?: string; // Optional descriptive text in the footer
}

const Footer: React.FC<FooterProps> = ({ buttons, description }) => {
  return (
    <div className={styles.footer}>
      {description && <div className={styles.description}>{description}</div>}
      {buttons && <ButtonGroup buttons={buttons} />} {/* Wrap buttons with ButtonGroup */}
    </div>
  );
};

export default Footer;
