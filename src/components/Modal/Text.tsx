import React from 'react';
import styles from './Modal.module.scss';

interface TextProps {
  title: string;
}

const Text: React.FC<TextProps> = ({ title }) => {
  return <h2 className={styles.text}>{title}</h2>;
};

export default Text;
