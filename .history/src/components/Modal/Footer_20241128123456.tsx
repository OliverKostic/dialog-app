import React from 'react';
import ButtonGroup from './ButtonGroup';
import styles from './Modal.module.scss';

interface FooterProps {
  buttons?: React.ReactNode[];
  additionalText?: string; // Optional descriptive text in the footer
}

const Footer: React.FC<FooterProps> = ({ buttons, additionalText }) => {
  return (
    <div className={styles.footer}>
      {additionalText && <div className={styles.description}>{additionalText}</div>}
      {buttons && <ButtonGroup buttons={buttons} />} {/* Wrap buttons with ButtonGroup */}
    </div>
  );
};

export default Footer;
