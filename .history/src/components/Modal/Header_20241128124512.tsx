import React from 'react';
import Text from './Text'; // Import the Text component
import ButtonGroup from './ButtonGroup';
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
      <Text title={title} /> {/* Use the Text component for the title */}
      {buttons && <ButtonGroup buttons={buttons} />}
    </div>
  );
};

export default Header;
