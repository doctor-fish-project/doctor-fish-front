import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { categorys } from '../../../constants/admin/categorys';
import { useNavigate } from 'react-router-dom';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';

function AdminSideBar({ category }) {
    const nav = useNavigate();

    const handleOnClick = (category) => {
        nav(category.link);
    }

    const handleNoticeOnClick = () => {
        nav("/admin/notice");
    }

    const handleSettingOnClick = () => {
        nav("/admin/setting");
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
                    categorys.map(category => (
                        <button onClick={() => handleOnClick(category)} category={category.name}>{category.icon}{category.name}</button>
                    ))
                }
            </div>
            <div css={s.settingBox}>
                <button onClick={handleNoticeOnClick}><IoNotificationsOutline />공지사항</button>
                <button onClick={handleSettingOnClick}><IoSettingsOutline />설정</button>
            </div>
        </div>

    );
}

export default AdminSideBar;