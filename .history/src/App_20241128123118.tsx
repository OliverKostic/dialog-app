import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Modal/Button';

const App: React.FC = () => {
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const closeModal = () => setCurrentModal(null);

 

  return (
    <div>
      <button onClick={() => setCurrentModal('modal1')}>Open Modal 1</button>
      <button onClick={() => setCurrentModal('modal2')}>Open Modal 2</button>
      <button onClick={() => setCurrentModal('modal3')}>Open Modal 3</button>

      {currentModal === 'modal1' && (
        <Modal
          title="Dialog 1"
          icon={<span>📄</span>}
          headerButtons={[<Button label="Info" onClick={() => alert('Info clicked!')} />]}
          footerButtons={[
            <Button label="Cancel" onClick={closeModal} />,
            <Button label="Confirm" onClick={() => alert('Confirmed!')} />,
          ]}
          description="This is a footer with two buttons."
        >
          <p>This dialog demonstrates a footer with two buttons and one header button.</p>
        </Modal>
      )}

      {/* Modal 2 */}
      {currentModal === 'modal2' && (
        <Modal
          title="Dialog 2"
          icon={<span>⚙️</span>}
          headerButtons={[
            <Button label="Settings" onClick={() => alert('Settings clicked!')} />,
            <Button label="Help" onClick={() => alert('Help clicked!')} />,
          ]}
        >
          <p>This dialog demonstrates two header buttons and no footer buttons.</p>
        </Modal>
      )}

      {/* Modal 3 */}
      {currentModal === 'modal3' && (
        <Modal
          title="Dialog 3"
          description="This is a footer with one button."
          footerButtons={[
            <Button label="Close" onClick={closeModal} />,
          ]}
        >
          <p>This dialog demonstrates no header buttons and a footer with one button.</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
