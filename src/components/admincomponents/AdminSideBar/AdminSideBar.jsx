import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { adminInstance, instance } from '../../../apis/utils/instance';
import { ICONS } from '../../../constants/admin/categoryicons';

function AdminSideBar(props) {
    const nav = useNavigate();

    const userInfo = useQuery(
        ["userInfoQuery"],
        async () => await adminInstance.get("/user/me"),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: true
        }
    )

    const categorys = useQuery(
        ["categorysQuery"],
        async () => await adminInstance.get("/category"),
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
            localStorage.removeItem("adminAccessToken");
            window.location.replace("/admin/signin");
        }
    }

    return (
        <div css={s.layout}>
            <p>MEDIBOOK 관리자 페이지</p>
            <div css={s.adminInfoBox}>
                <div css={s.profileBox} onClick={handleProfileOnClick}>
                    <img src={userInfo?.data?.data?.img}/>
                </div>
                <div css={s.nameBox}>
                    <p>{userInfo?.data?.data?.name}</p>
                    <div>
                        <p>MEDIBOOK</p>
                        <p>{userInfo?.data?.data?.roles[0].name}</p>
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