import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Modal/Button';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal
          title="Dialog Title"
          icon={<span>📄</span>}
          headerButtons={[<Button label="Header Button" onClick={() => alert('Header clicked!')} />]}
          footerButtons={[
            <Button label="Cancel" onClick={closeModal} />,
            <Button label="Save" onClick={() => alert('Saved!')} />,
          ]}
          description="This is additional footer text."  
        >
          <p>This is the content of the dialog.</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
