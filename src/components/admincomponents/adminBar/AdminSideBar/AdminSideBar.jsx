import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { categorys } from '../../../../constants/admin/categorys';
import { useNavigate } from 'react-router-dom';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';

function AdminSideBar({ category }) {
    const nav = useNavigate();

    const handleOnClick = (category) => {
        nav(category.link);
    }

    return (
        <div css={s.layout}>
            <p>MEDIBOOK 관리자</p>
            <div css={s.adminInfoBox}>
                <div css={s.profileBox}>
                    <img src="" alt="" />
                </div>
                <div css={s.nameBox}>
                    <p>name</p>
                    <div>
                        <p>MEDIBOOK</p>
                        <p>총괄팀장</p>
                    </div>
                </div>
                <button>로그아웃</button>
            </div>
            <div css={s.categoryBox}>
                {
                    categorys.slice(0, 5).map((category, index) => (
                        <button key={index} onClick={() => handleOnClick(category)} category={category.name}>{category.icon}{category.name}</button>
                    ))
                }
            </div>
            <div css={s.settingBox}>
                {
                    categorys.slice(5).map((category, index) => (
                        <button key={index} onClick={() => handleOnClick(category)} category={category.name}>{category.icon}{category.name}</button>
                    ))
                }
            </div>
        </div>

    );
}

export default AdminSideBar;