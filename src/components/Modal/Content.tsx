import React from 'react';
import styles from './Modal.module.scss';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
