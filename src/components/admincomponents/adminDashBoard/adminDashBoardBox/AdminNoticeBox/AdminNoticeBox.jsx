import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

import { useNavigate } from 'react-router-dom';
import { instance } from '../../../../../apis/utils/instance';
import { useQuery } from 'react-query';
import AdminDashBoardLayout from '../../AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardTitle from '../../AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardButton from '../../AdminDashBoardButton/AdminDashBoardButton';

function AdminNoticeBox(props) {
    const nav = useNavigate();

    const handleNavOnClick = () => {
        nav("/admin/notice")
    }

    const notices = useQuery(
        ["noticesQuery"],
        async () => await instance.get("/announce/dashboard/list")
    )

    console.log(notices)

    return (
        <AdminDashBoardLayout>
            <AdminDashBoardTitle title={"공지사항"} />
            <div css={s.layout}>
                {
                    notices?.data?.data?.announcements?.map(notice =>
                        <div key={notice.id} css={s.container}>
                            <div>{notice.title}</div>
                            <p></p>
                            <div>{notice.registerDate.slice(0, 10)}</div>
                        </div>
                    )
                }
            </div>
            <AdminDashBoardButton onClick={handleNavOnClick} />
        </AdminDashBoardLayout>
    );
}

export default AdminNoticeBox;