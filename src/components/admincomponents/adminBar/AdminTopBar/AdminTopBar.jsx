import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { categorys } from '../../../../constants/admin/categoryicons';

function AdminTopBar(props) {
    const location = useLocation();

    return (
        <div css={s.layout}>
            {/* {
                categorys.map((category, index) => (
                    category.link === location.pathname &&
                    <div key={index}>{category.icon}{category.name}</div>
                ))
            } */}
        </div>
    );
}

export default AdminTopBar;