import React from 'react';
import styles from './Modal.module.scss';

interface IconProps {
  icon: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <div className={styles.icon}>{icon}</div>;
};

export default Icon;
