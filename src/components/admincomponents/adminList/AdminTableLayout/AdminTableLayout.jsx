import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminTableLayout({ children }) {
    return (
        <table css={s.layout}>
            {children}
        </table>
    );
}

export default AdminTableLayout;