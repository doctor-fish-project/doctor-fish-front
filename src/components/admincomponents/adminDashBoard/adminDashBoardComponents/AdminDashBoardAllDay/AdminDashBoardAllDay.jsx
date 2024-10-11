import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminDashBoardContent from '../AdminDashBoardContent/AdminDashBoardContent';

function AdminDashBoardAllDay(props) {
    return (
        <div css={s.layout}>
            <AdminDashBoardContent />
        </div>
    );
}

export default AdminDashBoardAllDay;