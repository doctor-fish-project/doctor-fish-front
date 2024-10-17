import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSideBar from '../adminBar/AdminSideBar/AdminSideBar';
import AdminTopBar from '../adminBar/AdminTopBar/AdminTopBar';
import AdminReview from '../adminModal/AdminReview/AdminReview';
import AdminNotice from '../adminModal/AdminNotice/AdminNotice';

function AdminContainer({ children }) {
    
    return (
        <div css={s.layout}>
            {children}
        </div>
    );
}

export default AdminContainer;