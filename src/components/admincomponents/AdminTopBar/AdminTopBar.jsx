import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { categorys } from '../../../constants/admin/categorys';

function AdminTopBar(props) {
    const location = useLocation();

    return (
        <div css={s.layout}>
            {
                categorys.map(category => (
                    category.link === location.pathname &&
                    <div>{category.icon}{category.name}</div>
                ))
            }
        </div>
    );
}

export default AdminTopBar;