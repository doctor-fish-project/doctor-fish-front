import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSideBar from '../adminBar/AdminSideBar/AdminSideBar';

function AdminMainLayout({ children }) {
    
    return (
        <div css={s.layout}>
            <AdminSideBar />
            {children}
        </div>
    );
}

export default AdminMainLayout;