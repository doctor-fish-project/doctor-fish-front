import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSideBar from '../adminBar/AdminSideBar/AdminSideBar';
import AdminTopBar from '../adminBar/AdminTopBar/AdminTopBar';

function AdminContainer({ children }) {
    return (
        <div css={s.layout}>
            <AdminSideBar />
            <div css={s.container}>
                <AdminTopBar />
                {children}
            </div>
        </div>
    );
}

export default AdminContainer;