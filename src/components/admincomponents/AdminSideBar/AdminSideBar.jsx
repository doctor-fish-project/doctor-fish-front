import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { ICONS } from '../../../constants/admin/categoryicons';

function AdminSideBar(props) {
    const nav = useNavigate();

    const categorys = useQuery(
        ["categorysQuery"],
        async () => await instance.get("/category"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        },
    )

    const handleLinkOnClick = (link) => {
        nav(link);
    }

    const handleProfileOnClick = () => {
        nav("/admin/profile")
    }

    const handleSignoutOnClick = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem("accessToken");
            window.location.replace("/admin/signin");
        }
    }

    return (
        <div css={s.layout}>
            <p>MEDIBOOK 관리자 페이지</p>
            <div css={s.adminInfoBox}>
                <div css={s.profileBox} onClick={handleProfileOnClick}>
                    <img src="" alt=""/>
                </div>
                <div css={s.nameBox}>
                    <p>name</p>
                    <div>
                        <p>MEDIBOOK</p>
                        <p>총괄팀장</p>
                    </div>
                </div>
                <button onClick={handleSignoutOnClick}>로그아웃</button>
            </div>
            <div css={s.categoryBox}>
                {
                    categorys?.data?.data?.map(category =>
                        <button key={category.categoryId} onClick={() => handleLinkOnClick(category.link)}>{ICONS[category.icon]}{category.name}</button>
                    )
                }
            </div>
        </div>

    );
}

export default AdminSideBar;