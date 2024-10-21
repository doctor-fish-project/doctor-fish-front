import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoSearchOutline } from "react-icons/io5";
import AdminReview from '../adminModal/AdminReview/AdminReview';
import AdminNotice from '../adminModal/AdminNotice/AdminNotice';
import { useLocation } from 'react-router-dom';

function AdminPageContainer({ title, count, children }) {
    const location = useLocation();
    const [reviewModalElement, setReviewModalElement] = useState(<></>);
    const [noticeModalElement, setNoticeModalElement] = useState(<></>);

    const containerRef = useRef();

    useEffect(() => {
        if (!!containerRef) {
            setReviewModalElement(<AdminReview containerRef={containerRef} />)
            setNoticeModalElement(<AdminNotice containerRef={containerRef} />)
        }
    }, [containerRef])
    return (
        <div css={s.layout} ref={containerRef}>
            {reviewModalElement}
            {noticeModalElement}
            <div css={s.titleAndInput}>
                <div>
                    <p>{title}</p>
                    {
                        (location.pathname === "/admin/profile" || location.pathname === "/admin/add" || location.pathname === "/admin/leave") ? <></> :
                        <p>총 {count}건</p>
                    }
                </div>
                {
                    (location.pathname !== "/admin/add" && location.pathname !== "/admin/profile" && location.pathname !== "/admin/leave") &&
                    <>
                        <input type="text" placeholder='검색어를 입력해주세요' />
                        <button><IoSearchOutline /></button>
                    </>
                }
                {
                    (location.pathname === "/admin/profile" || location.pathname === "/admin/add") &&
                    <div css={s.buttonBox}>
                        <button>확인</button>
                        <button>취소</button>
                    </div>
                }
            </div>
            {children}
        </div>
    );

}
export default AdminPageContainer;