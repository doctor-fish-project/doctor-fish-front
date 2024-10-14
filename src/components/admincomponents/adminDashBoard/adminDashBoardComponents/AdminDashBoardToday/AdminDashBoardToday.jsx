import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainerContent from '../AdminDashBoardContent/AdminDashBoardContent';

function AdminDashBoardToday(props) {
    return (
        <div css={s.layout}>
            <AdminContainerContent />
        </div>
    );
}

export default AdminDashBoardToday;