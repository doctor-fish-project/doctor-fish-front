import React from 'react';
import ReactModal from 'react-modal';

function ModalLayout({ children, isOpen, closeModal, containerRef, ani, width, height, inset, borderTop, borderBottom, borderLeft }) {
    return (
        <ReactModal
            style={{
                content: {
                    boxSizing: "border-box",
                    inset: `${inset}`,
                    border: "none",
                    borderTop: `${borderTop}`,
                    borderBottom: `${borderBottom}`,
                    borderLeft: `${borderLeft}`,
                    borderRadius: "10px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    padding: "0",
                    width: `${width}`,
                    height: `${height}`,
                    zIndex: "99",
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
            shouldCloseOnOverlayClick={true}
        >
            {children}
        </ReactModal>
    );
}

export default ModalLayout;