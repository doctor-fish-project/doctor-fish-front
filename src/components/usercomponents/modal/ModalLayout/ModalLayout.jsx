import React from 'react';
import ReactModal from 'react-modal';

function ModalLayout({ children, isOpen, closeModal, containerRef, ani }) {
    return (
        <ReactModal
            style={{
                content: {
                    boxSizing: "border-box",
                    inset: "auto 0px 0px",
                    borderRadius: "10px",
                    padding: "0",
                    width: "100%",
                    height: "70%",
                    zIndex: "50",
                    animation: `${ani} 0.6s 1`,

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

export default ModalLayout;