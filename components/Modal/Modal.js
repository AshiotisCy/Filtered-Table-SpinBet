import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" data-testid="modal_overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
            {children}
            <button className="close-button" data-testid="modal_close_btn" onClick={onClose}>
                X
            </button>
        </div>
        </div>
    );
};

export default Modal;