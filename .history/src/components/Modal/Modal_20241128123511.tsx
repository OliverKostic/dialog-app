import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import styles from './Modal.module.scss';

interface ModalProps {
  title: string;
  icon?: React.ReactNode;
  footerButtons?: React.ReactNode[];
  headerButtons?: React.ReactNode[];
  description?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  icon,
  footerButtons,
  headerButtons,
  description,
  children,
}) => {

    
  return (
    <div className={styles.modal}>
      <Header title={title} icon={icon} buttons={headerButtons} />
      <Content>{children}</Content>
      <Footer buttons={footerButtons} additionalText={description} />
    </div>
  );
};

export default Modal;
