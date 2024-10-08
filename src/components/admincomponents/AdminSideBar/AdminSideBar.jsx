import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { categorys } from '../../../constants/admin/categorys';
import { useNavigate } from 'react-router-dom';

function AdminSideBar(props) {
    const nav = useNavigate();

    const handleOnClick = (category) => {
        nav(category.link);
    }

    return (
        <div css={s.layout}>
            <div css={s.categoryBox}>
                {
                    categorys.map((category, index) => 
                        <button key={index} onClick={() => handleOnClick(category)}>{category.icon}{category.name}</button>
                    )
                }
            </div>
        </div>

    );
}

export default AdminSideBar;