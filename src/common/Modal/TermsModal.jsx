import React from 'react';
import Modal from 'react-modal';
import '../../css/TermsModal.css';

Modal.setAppElement('#root');

const TermsModal = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
            className="modal"
            overlayClassName="overlay"
        >
            <h2>{title}</h2>
            <div className='modal-content'>
                <p>{content}</p>
            </div>
            <button onClick={onRequestClose} className="modal-close-button">닫기</button>
        </Modal>
    );
};

export default TermsModal;