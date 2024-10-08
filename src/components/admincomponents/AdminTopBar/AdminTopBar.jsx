import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';

function AdminTopBar(props) {
    const nav = useNavigate();

    const handleHomeClick = () => {
        nav("/admin/dashboard");
    }
    return (
        <div css={s.layout}>
            <div css={s.titleBox}>
                <h2 onClick={handleHomeClick}>MEDIBOOK</h2>
            </div>
            <div css={s.userInfoContainer}>
                <div css={s.userInfoBox}>
                    유저정보
                </div>
                <div css={s.buttonBox}>
                    <button>로그아웃</button>
                </div>
            </div>
        </div>
    );
}

export default AdminTopBar;