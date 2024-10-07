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
                </div>
            </div>
        </div>
    );
}

export default AdminDashBoard;