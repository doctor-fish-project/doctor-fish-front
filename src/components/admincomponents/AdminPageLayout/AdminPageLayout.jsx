import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoSearchOutline } from "react-icons/io5";
import AdminReview from '../adminModal/AdminReview/AdminReview';
import { useLocation } from 'react-router-dom';
import AdminNoticeWrite from '../adminModal/AdminNoticeWrite/AdminNoticeWrite';
import AdminNotice from '../adminModal/AdminNotice/AdminNotice';

function AdminPageLayout({ title, count, children, onClick, onCheckClick, onCancelClick, editState }) {
    const location = useLocation();
    const [reviewModalElement, setReviewModalElement] = useState(<></>);
    const [noticeModalElement, setNoticeModalElement] = useState(<></>);
    const [noticeWriteModalElement, setNoticeWriteModal] = useState(<></>);

    const containerRef = useRef();

    useEffect(() => {
        if (!!containerRef) {
            setReviewModalElement(<AdminReview containerRef={containerRef} />)
            setNoticeModalElement(<AdminNotice containerRef={containerRef} />)
            setNoticeWriteModal(<AdminNoticeWrite containerRef={containerRef}/>)
        }
    }, [containerRef])

    return (
        <div css={s.layout} ref={containerRef}>
            {noticeWriteModalElement}
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
                    (location.pathname === "/admin/add" || location.pathname === "/admin/leave") &&
                    <div css={s.buttonBox}>
                        <button onClick={onCheckClick}>확인</button>
                        <button onClick={onCancelClick}>취소</button>
                    </div>
                }
                {
                    location.pathname === "/admin/profile" ?
                        editState ?
                        <div css={s.buttonBox}>
                            <button onClick={onCheckClick}>확인</button>
                            <button onClick={onCancelClick}>취소</button>
                        </div> :
                        <div css={s.editButtonBox}>
                            <button onClick={onClick}>편집</button>
                        </div> : <></>
                }
            </div>
            {children}
        </div>
    );

}
export default AdminPageLayout;