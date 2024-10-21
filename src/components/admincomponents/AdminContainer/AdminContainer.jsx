import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

function AdminContainer({ children }) {

    return (
        <div css={s.layout}>
            <AdminSideBar />
            <div css={s.container}>
                {children}
            </div>
        </div>
    );
}

export default AdminContainer;