import React from 'react';
import styles from './Modal.module.scss';

interface ButtonGroupProps {
  buttons: React.ReactNode[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return <div className={styles.buttonGroup}>{buttons}</div>;
};

export default ButtonGroup;
