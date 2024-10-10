import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaUser, FaLock } from "react-icons/fa6";

function AdminSigninPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h2>관리자 로그인</h2>
                <div css={s.inputBox}>
                    <FaUser />
                    <input type="text" placeholder='아이디'/>
                    <FaLock />
                    <input type="password" placeholder='패스워드'/>
                </div>
                <div css={s.buttonBox}>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default AdminSigninPage;