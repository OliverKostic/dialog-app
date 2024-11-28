import React from 'react';
import styles from './Modal.module.scss';

interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
  buttons?: React.ReactNode[];
}

const Header: React.FC<HeaderProps> = ({ title, icon, buttons }) => {
  console.log('Rendering Header:', title); // Debugging log

  return (
    <div className={styles.header}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h2 className={styles.title}>{title}</h2>
      {buttons && <div className={styles.buttons}>{buttons}</div>}
    </div>
  );
};

export default Header;
