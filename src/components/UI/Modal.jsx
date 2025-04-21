// src/components/Modal/Modal.jsx
import React from 'react';
import './Model.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust path as needed

const Modal = ({ show, children, onClose }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleContinue = () => {
    onClose();
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/auth');
    }
  };

  return show ? (
    <div className="ModalOverlay" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className='ModalActions'>
          <button onClick={onClose} className="CloseButton">Close</button>
          <button onClick={handleContinue} className="ContinueButton">Continue</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
