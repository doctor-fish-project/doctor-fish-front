import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { ICONS } from '../../../constants/admin/categoryicons';

function AdminSideBar(props) {
    const nav = useNavigate();

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");
    const categorys = queryClient.getQueryData("categorysQuery")

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
            <div css={s.container}>
                <p>MEDIBOOK 관리자 페이지</p>
                <div css={s.adminInfoBox}>
                    <div css={s.profileBox} onClick={handleProfileOnClick}>
                        <img src={userInfo?.data?.img}/>
                    </div>
                    <div css={s.nameBox}>
                        <p>{userInfo?.data?.name}</p>
                        <div>
                            <p>MEDIBOOK</p>
                            <p>{userInfo?.data?.roles[0].name}</p>
                        </div>
                    </div>
                    <button onClick={handleSignoutOnClick}>로그아웃</button>
                </div>
                <div css={s.categoryBox}>
                    {
                        categorys?.data?.map(category =>
                            <button key={category.categoryId} onClick={() => handleLinkOnClick(category.link)}>{ICONS[category.icon]}{category.name}</button>
                        )
                    }
                </div>
            </div>
        </div>

    );
}

export default AdminSideBar;