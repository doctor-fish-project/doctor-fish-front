import React from 'react';
import ReactModal from 'react-modal';

function AdminModalLayout({ children, isOpen, closeModal, containerRef, }) {

    return (
        <ReactModal
            style={{
                content: {
                    boxSizing: "border-box",
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    inset: `${containerRef.current.offsetTop + (containerRef.current.clientHeight / 2)}px 0px 0px ${containerRef.current.offsetLeft + (containerRef.current.clientWidth / 2)}px`,
                    border: "1px solid #dbdbdb",
                    borderRadius: "10px",
                    padding: "0",
                    width: "70%",
                    height: "80%",
                    zIndex: "50"
                },
                overlay: {
                    position: "fixed",
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