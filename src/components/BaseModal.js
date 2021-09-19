import Modal from '@mui/material/Modal';
export default function BaseModal({ modalIsOpen, closeModal, children }) {
    return (
        <Modal
            open={modalIsOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {children}
        </Modal>
    )

}