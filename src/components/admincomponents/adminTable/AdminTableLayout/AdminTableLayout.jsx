import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminTableLayout({ children }) {
    return (
        <div css={s.layout}>
            <table css={s.container}>
                {children}
            </table>
        </div>
    );
}

export default AdminTableLayout;