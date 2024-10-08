import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminTopBar from '../AdminTopBar/AdminTopBar';
import AdminDashBoard from '../../../pages/adminpage/AdminDashBoard/AdminDashBoard';

function AdminContainer({ children }) {
    return (
        <div css={s.layout}>
            <AdminTopBar />
            <div css={s.container}>
                <AdminSideBar />
                {children}
            </div>
        </div>
    );
}

export default AdminContainer;