import React from 'react';
import Icon from './Icon';
import Text from './Text';
import styles from './Modal.module.scss';

interface HeaderProps {
  icon?: React.ReactNode;
  title: string;
  buttons?: React.ReactNode[];
}

const Header: React.FC<HeaderProps> = ({ icon, title, buttons }) => {
  return (
    <div className={styles.header}>
      {icon && <Icon icon={icon} />}
      <Text title={title} />
      <div className={styles.buttons}>
        {buttons?.map((button, index) => (
          <span key={index}>{button}</span>
        ))}
      </div>
    </div>
  );
};

export default Header;
