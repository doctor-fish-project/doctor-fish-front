import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminListTable({ children }) {
    return (
        <table css={s.layout}>
            {children}
        </table>
    );
}

export default AdminListTable;