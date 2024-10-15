import React from 'react';
import ReactModal from 'react-modal';

function AdminModalLayout({ children, isOpen, closeModal, containerRef, }) {

    return (
        <ReactModal
            style={{
                content: {
                    boxSizing: "border-box",
                    inset: "10% 10%",
                    border: "1px solid #dbdbdb",
                    borderRadius: "10px",
                    padding: "0",
                    width: "80%",
                    height: "80%",
                    zIndex: "50"
                },
                overlay: {
                    position: "absolute",
                    backgroundColor: "transparent",
                }
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            parentSelector={() => containerRef.current}
        >
            {children}
        </ReactModal>
    );
}

export default AdminModalLayout;