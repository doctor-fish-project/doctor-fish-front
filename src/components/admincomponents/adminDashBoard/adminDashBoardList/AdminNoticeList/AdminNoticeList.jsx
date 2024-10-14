import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainerTitle from '../../adminDashBoardComponents/AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardNotice from '../../adminDashBoardComponents/AdminDashBoardNotice/AdminDashBoardNotice';
import AdminDashBoardLayout from '../../adminDashBoardComponents/AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardButton from '../../adminDashBoardComponents/AdminDashBoardButton/AdminDashBoardButton';

function AdminNoticeList({ title }) {
    return (
        <AdminDashBoardLayout>
            <AdminContainerTitle title={"공지사항"} />
            <div css={s.layout}>
                <AdminDashBoardNotice />
            </div>
            <AdminDashBoardButton />
        </AdminDashBoardLayout>
    );
}

export default AdminNoticeList;