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
      {additionalText && <div className={styles.additionalText}>{additionalText}</div>}
      {buttons && <ButtonGroup buttons={buttons} />} 
    </div>
  );
};

export default Footer;
