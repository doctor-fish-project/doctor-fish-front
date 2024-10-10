import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminTopBar from '../AdminTopBar/AdminTopBar';
import AdminDashBoard from '../../../pages/adminpage/AdminDashBoard/AdminDashBoard';

function AdminContainer({ children, category }) {
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