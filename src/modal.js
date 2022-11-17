import React from 'react';
import './modal.css';

/**
 *
 * @param {setIsOpen, modalText}
 * @returns Modal
 */

function Modal({ setIsOpen, modalText }) {
  return (
    <div>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalContent">{modalText}</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="okBtn" onClick={() => setIsOpen(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
