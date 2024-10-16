import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import { ICONS } from '../../../../constants/admin/categoryicons';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { categoryIdAtom } from '../../../../atoms/adminAtoms';

function AdminSideBar(props) {
    const nav = useNavigate();
    const location = useLocation();

    const [categoryId, setCategoryId] = useRecoilState(categoryIdAtom);

    useEffect(() => {
        const result = categorys?.data?.data?.find(category => category.link === location.pathname)
        if(result) {
            setCategoryId(result.id)
        }
    }, [location.pathname])

    const categorys = useQuery(
        ["categorysQuery"],
        async () => await instance.get("/category"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        },
    )

    const handleLinkOnClick = (categoryId, link) => {
        setCategoryId(categoryId)
        nav(link);
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
                    categorys?.data?.data?.map(category =>
                        <button key={category.categoryId} onClick={() => handleLinkOnClick(category.categoryId, category.link)}>{ICONS[category.icon]}{category.name} </button>
                    )
                }
            </div>
        </div>

    );
}

export default AdminSideBar;