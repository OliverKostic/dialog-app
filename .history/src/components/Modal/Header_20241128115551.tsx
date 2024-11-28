import React from 'react';
import styles from './Modal.module.scss';

interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
  buttons?: React.ReactNode[];
}

const Header: React.FC<HeaderProps> = ({ title, icon, buttons }) => {
  return (
    <div className={styles.header}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h2>{title}</h2>
      <div className={styles.buttons}>
        {buttons?.map((button, index) => (
          <span key={index}>{button}</span>
        ))}
      </div>
    </div>
  );
};

export default Header;
