import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import styles from './Modal.module.scss';

interface ModalProps {
  title: string;
  icon?: React.ReactNode;
  headerButtons?: React.ReactNode[];
  footerButtons?: React.ReactNode[];
  description?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  icon,
  headerButtons,
  footerButtons,
  description,
  children,
}) => {
  console.log('Rendering Modal:', title); // Debugging log

  return (
    <div className={styles.modal}>
      {/* Header */}
      <Header title={title} icon={icon} buttons={headerButtons} />

      {/* Content */}
      <Content>{children}</Content>

      {/* Footer */}
      <Footer description={description} buttons={footerButtons} />
    </div>
  );
};

export default Modal;
