import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminAuthHook from '../../../hooks/AdminAuthHook';

function AdminMainLayout({ children }) {    
    return (
        <div css={s.layout}>
            {children}
        </div>
    );
}

export default AdminMainLayout;