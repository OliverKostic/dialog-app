import React from 'react';
import Text from './Text';  
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
      <Text title={title} />  
      {buttons && <ButtonGroup buttons={buttons} />}
    </div>
  );
};

export default Header;
