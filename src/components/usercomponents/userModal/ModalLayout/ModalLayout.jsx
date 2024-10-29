import React from 'react';
import ReactModal from 'react-modal';

function ModalLayout({ children, isOpen, closeModal, containerRef, ani, width, height, inset, borderTop, borderBottom }) {
    return (
        <ReactModal
            style={{
                content: {
                    boxSizing: "border-box",
                    inset: `${inset}`,
                    border: "none",
                    borderTop: `${borderTop}`,
                    borderBottom: `${borderBottom}`,
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
        >
            {children}
        </ReactModal>
    );
}

export default ModalLayout;