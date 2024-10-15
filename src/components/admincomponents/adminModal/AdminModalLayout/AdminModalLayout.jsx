import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminModalLayout({ children, isOpen, onRequestClose }) {
    const modalBackground = useRef();

    return (
        <>
            {
                isOpen &&
                <>
                    <div css={s.modalContainer} ref={modalBackground} onClick={e => {
                        if (e.target === modalBackground.current) {
                            onRequestClose(false);
                        }
                    }}>
                    </div>
                    {children}
                </>
            }
        </>
    );
}

export default AdminModalLayout;