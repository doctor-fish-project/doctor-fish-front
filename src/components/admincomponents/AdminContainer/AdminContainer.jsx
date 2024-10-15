import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSideBar from '../adminBar/AdminSideBar/AdminSideBar';
import AdminTopBar from '../adminBar/AdminTopBar/AdminTopBar';
import AdminReview from '../adminModal/AdminReview/AdminReview';
import AdminNotice from '../adminModal/AdminNotice/AdminNotice';

function AdminContainer({ children }) {
    const [ reviewModalElement, setReviewModalElement ] = useState(<></>);
    const [ noticeModalElement, setNoticeModalElement ] = useState(<></>);

    const containerRef = useRef();

    useEffect(() => {
        if(!!containerRef) {
            setReviewModalElement(<AdminReview containerRef={containerRef} />)
            setNoticeModalElement(<AdminNotice containerRef={containerRef} />)
        }
    }, [containerRef])

    return (
        <div css={s.layout}>
            <AdminSideBar />
            <div css={s.container} ref={containerRef}>
                <AdminTopBar />
                {reviewModalElement}
                {noticeModalElement}
                {children}
            </div>
        </div>
    );
}

export default AdminContainer;