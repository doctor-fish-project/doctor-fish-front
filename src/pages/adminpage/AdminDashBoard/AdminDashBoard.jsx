import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaUserLock } from "react-icons/fa6";

function AdminDashBoard(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.sideBar}>
                    <div css={s.titleBox}>
                        <h2>MEDIBOOK</h2>
                    </div>
                    <div css={s.categoryBox}>
                        <button><FaUserLock />회원정보</button>
                    </div>
                    <div css={s.categoryBox}>
                        <button><FaUserLock />예약관리</button>
                    </div>
                    <div css={s.categoryBox}>
                        <button><FaUserLock />실시간 예약 현황</button>
                    </div>
                    <div css={s.categoryBox}>
                        <button><FaUserLock />리뷰 및 댓글 관리</button>
                    </div>
                    <div css={s.categoryBox}>
                        <button><FaUserLock />공지사항</button>
                    </div>
                    <div css={s.categoryBox}>
                        <button><FaUserLock />설정</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashBoard;